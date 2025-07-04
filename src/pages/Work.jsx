import { motion } from "framer-motion";
import RecentProjects from "../components/RecentProjects";
import { porjObj } from "../data/myWorkData";
import "./work.css";

export default function Work() {
  function handdleClick() {
    window.open("https://github.com/THEMEGATRON76", "_blank");
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const projectsVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="work-container"
    >
      <motion.h1 
        variants={titleVariants}
        className="work-title"
      >
        My Work.
      </motion.h1>
      
      <motion.p variants={itemVariants}>
        🚀I've been coding for 3+ years. I build cool things, break them (on
        purpose 😎), and learn a lot. 💻Below are some of my latest ✨ projects.
        If you want to see more, feel free to dig through my GitHub treasure
        chest!🧑‍💻📦
      </motion.p>

      <motion.div 
        variants={projectsVariants}
        className="projects-section"
      >
        <RecentProjects projects={porjObj} page="work" />
      </motion.div>

      <motion.p variants={itemVariants}>
        Want to see more? Check out my GitHub profile for more projects and
        contributions.
      </motion.p>

      <motion.button
        className="workgitHubButton button"
        onClick={handdleClick}
        whileTap="tap"
      >
        <i 
          className="fa-brands fa-github"
        />
        {" "}View my Github{" "}
        <i 
          className="fa-solid fa-arrow-right"
        />
      </motion.button>
    </motion.div>
  );
}