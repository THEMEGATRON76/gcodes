import { useState } from "react";
import { motion } from "framer-motion";
import "./contactMe.css";
import Textbox from "./TextBox";
import insta from "../assets/symbols/icons8-instagram-logo-48.png";
import fb from "../assets/symbols/icons8-facebook-48.png";
import linkedIn from "../assets/symbols/icons8-linkedin-48.png";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO:need to attach to API
    console.log("Form Data:", formData);
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Description:", formData.description);
  };

  function handdleClick(social) {
    switch (social) {
      case "ig":
        window.open("https://www.instagram.com/rathoregeetansh/", "_blank");
        break;
      case "fb":
        window.open("https://www.facebook.com/geetansh.rathore", "_blank");
        break;
      case "link":
        window.open("https://www.linkedin.com/in/geetansh-rathore-078579140/", "_blank");
        break;
      case "mail":
        window.location = "mailto:xyz@yourapplicationdomain.com";
        break;
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
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
        duration: 0.5,
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

  const socialButtonVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.08,
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      x: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const socialsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  return (
    <motion.div 
      id="ContactMe"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={titleVariants}>
        Contact me .
      </motion.h1>

      <motion.p variants={itemVariants}>
        I'm always ready for a new adventure 🚀. Whether it's an interesting
        project 💻, a fun collaboration 🎨, or just a good chat ☕, I'm in. If
        you have something in mind, don't hesitate to reach out; let's create
        something great together!✨
      </motion.p>

      <motion.div 
        className="formCard"
        variants={formVariants}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="TextboxesPlacement"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Textbox
              label="Name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleInputChange("name")}
            />

            <Textbox
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange("email")}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Textbox
              label="Description"
              type="textarea"
              placeholder="Enter your description here..."
              showCounter
              maxLength={500}
              value={formData.description}
              onChange={handleInputChange("description")}
              required
            />
          </motion.div>

          <motion.button 
            className="button"
            type="submit"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.i 
              className="fa-solid fa-paper-plane"
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -2, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 3
              }}
            />
            {" "}Send
          </motion.button>
        </form>
      </motion.div>

      <motion.p variants={itemVariants}>
        Or contact me with ...
      </motion.p>

      <motion.div 
        className="socilas"
        variants={socialsContainerVariants}
      >
        <motion.button 
          className="button" 
          onClick={() => handdleClick("mail")}
          variants={socialButtonVariants}
          whileTap="tap"
        >
          <motion.i 
            className="fa-solid fa-envelope"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 4
            }}
          />
          {" "}Email{" "}
          <motion.i 
            className="fa-solid fa-arrow-right"
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </motion.button>

        <motion.button 
          className="button" 
          onClick={() => handdleClick("ig")}
          variants={socialButtonVariants}
          whileTap="tap"
        >
          <motion.img 
            src={insta} 
            width={30} 
            alt="Instagram"
            animate={{ rotate: [0, 360] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 5
            }}
          />
          Instagram{" "}
          <motion.i 
            className="fa-solid fa-arrow-right"
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </motion.button>

        <motion.button 
          className="button" 
          onClick={() => handdleClick("fb")}
          variants={socialButtonVariants}
          whileTap="tap"
        >
          <motion.img 
            src={fb} 
            width={30} 
            alt="Facebook"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 4
            }}
          />
          Facebook{" "}
          <motion.i 
            className="fa-solid fa-arrow-right"
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </motion.button>

        <motion.button 
          className="button" 
          onClick={() => handdleClick("link")}
          variants={socialButtonVariants}
          whileTap="tap"
        >
          <motion.img 
            src={linkedIn} 
            alt="LinkedIn" 
            width={30}
            animate={{ 
              y: [0, -3, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 3
            }}
          />
          LinkedIn{" "}
          <motion.i 
            className="fa-solid fa-arrow-right"
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}