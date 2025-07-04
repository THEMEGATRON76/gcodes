import { useState, useMemo } from "react";
import { blogPosts, categories, featuredPost } from "../data/blogData";
import { motion, AnimatePresence } from "framer-motion";
import "./blog.css";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const handleReadMore = (post) => {
    setSelectedPost(post);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const filterButtonVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "rgb(34, 34, 34)",
    },
    active: {
      scale: 1.05,
      backgroundColor: "rgb(59, 130, 246)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (selectedPost) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          className="blog-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key="post-detail"
        >
          <motion.button
            className="read-more-btn button"
            onClick={handleBackToBlog}
            style={{ marginBottom: "30px" }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            ← Back to Blog
          </motion.button>

          <motion.article
            className="post-detail"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="post-category"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {selectedPost.category}
            </motion.div>
            <motion.h1
              style={{
                fontSize: "2rem",
                marginBottom: "20px",
                color: "#ffffff",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {selectedPost.title}
            </motion.h1>
            <motion.div
              className="post-meta"
              style={{ marginBottom: "30px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </motion.div>
            <motion.div
              className="post-tags"
              style={{ marginBottom: "30px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {selectedPost.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                whiteSpace: "pre-line",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {selectedPost.content}
            </motion.div>
          </motion.article>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="blog-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="blog-list"
      >
        <motion.header className="blog-header" variants={itemVariants}>
          <motion.h1
            className="blog-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tech Blog.
          </motion.h1>
          <motion.p
            className="blog-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A blog about technology, programming, and various intriguing topics.
            Here I share my experiences, projects and opinions on modern web
            development.
          </motion.p>
        </motion.header>

        <motion.nav
          className="blog-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
              variants={filterButtonVariants}
              initial="inactive"
              animate={selectedCategory === category ? "active" : "inactive"}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              custom={index}
              style={{
                background:
                  selectedCategory === category
                    ? "rgb(59, 130, 246)"
                    : "rgb(34, 34, 34)",
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.nav>

        <motion.section
          className="featured-post"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ delay: 0.4 }}
        >
          <motion.span
            className="featured-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Featured
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {featuredPost.title}
          </motion.h2>
          <motion.div
            className="post-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <span>{featuredPost.date}</span>
            <span>{featuredPost.readTime}</span>
            <span>{featuredPost.category}</span>
          </motion.div>
          <motion.p
            className="post-excerpt"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {featuredPost.excerpt}
          </motion.p>
          <motion.button
            className="read-more-btn button"
            onClick={() => handleReadMore(featuredPost)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            Read More
            <motion.i
              className="fas fa-arrow-right"
              style={{ marginLeft: "10px" }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            All Posts
          </motion.h2>
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                className="no-posts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                No posts found for the selected category.
              </motion.div>
            ) : (
              <motion.div
                className="posts-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={selectedCategory}
              >
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="post-card"
                    variants={cardVariants}
                    custom={index}
                    whileHover="hover"
                    layout
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="post-category"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {post.category}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.div
                      className="post-meta"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    >
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </motion.div>
                    <motion.p
                      className="post-excerpt"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      {post.excerpt}
                    </motion.p>
                    <motion.div
                      className="post-tags"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                    >
                      {post.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.1 + 0.5 + tagIndex * 0.05,
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.button
                      className="read-more-btn button"
                      onClick={() => handleReadMore(post)}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    >
                      Read More
                      <motion.i
                        className="fas fa-arrow-right"
                        style={{ marginLeft: "10px" }}
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Blog;
