import { useState, useMemo } from 'react';
import { blogPosts,categories,featuredPost} from '../data/blogData';
import './blog.css';
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="blog-container">
        <button 
          className="read-more-btn button" 
          onClick={handleBackToBlog}
          style={{ marginBottom: '30px' }}
        >
          ← Back to Blog
        </button>
        
        <article className="post-detail">
          <div className="post-category">{selectedPost.category}</div>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#ffffff' }}>
            {selectedPost.title}
          </h1>
          <div className="post-meta" style={{ marginBottom: '30px' }}>
            <span>{selectedPost.date}</span>
            <span>{selectedPost.readTime}</span>
          </div>
          <div className="post-tags" style={{ marginBottom: '30px' }}>
            {selectedPost.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            lineHeight: '1.8', 
            fontSize: '1.1rem',
            whiteSpace: 'pre-line'
          }}>
            {selectedPost.content}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Tech Blog.</h1>
        <p className="blog-subtitle">
          A blog about technology, programming, and various intriguing topics. 
          Here I share my experiences, projects and opinions on modern web development.
        </p>
      </header>

      <nav className="blog-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="featured-post">
        <span className="featured-badge">Featured</span>
        <h2>{featuredPost.title}</h2>
        <div className="post-meta">
          <span>{featuredPost.date}</span>
          <span>{featuredPost.readTime}</span>
          <span>{featuredPost.category}</span>
        </div>
        <p className="post-excerpt">{featuredPost.excerpt}</p>
        <button 
          className="read-more-btn button"
          onClick={() => handleReadMore(featuredPost)}
        >
          Read More
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </section>

      <section>
        <h2 className="section-title">All Posts</h2>
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            No posts found for the selected category.
          </div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-category">{post.category}</div>
                <h3>{post.title}</h3>
                <div className="post-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="read-more-btn button"
                  onClick={() => handleReadMore(post)}
                >
                  Read More
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;