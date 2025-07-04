import { useState } from "react";
import logo from "../assets/logo.png";
import "./navigationBar.css";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggleButton from "./ThemeToggle";

export default function NavigationBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  function handleDropdown() {
    setDropDown((prev) => !prev);
  }

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const sidebarVariants = {
    hidden: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const sidebarItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <nav>
        <motion.img
          src={logo}
          alt="Logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        />

        <motion.div className="aTagsDiv" whileTap={{ scale: 0.95 }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && !dropDown ? "selected nav-link" : "nav-link"
            }
          >
            Home
          </NavLink>
        </motion.div>

        <motion.div className="aTagsDiv" whileTap={{ scale: 0.95 }}>
          <NavLink
            to="my-work"
            className={({ isActive }) =>
              isActive && !dropDown ? "selected nav-link" : "nav-link"
            }
          >
            My Work
          </NavLink>
        </motion.div>

        <motion.div className="aTagsDiv" whileTap={{ scale: 0.95 }}>
          <NavLink
            to="contact-me"
            className={({ isActive }) =>
              isActive && !dropDown ? "selected nav-link" : "nav-link"
            }
          >
            Contact Me
          </NavLink>
        </motion.div>

        <motion.div className="aTagsDiv" whileTap={{ scale: 0.95 }}>
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive && !dropDown ? "selected nav-link" : "nav-link"
            }
          >
            Blog
          </NavLink>
        </motion.div>

        <div className="dropDownContainer">
          <motion.button
            onClick={handleDropdown}
            className={
              dropDown
                ? "selected button nav-link navButton"
                : "navButton button nav-link"
            }
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            More
            <motion.i
              className="fa-solid fa-chevron-right"
              animate={{ rotate: dropDown || isHovered ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.button>

          <AnimatePresence>
            {dropDown && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="dropdown-menu"
              >
                <motion.a
                  onClick={() => setDropDown(false)}
                  href="https://github.com/THEMEGATRON76"
                  target="_blank"
                  className="dropdownAnchor"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <p className="firstPara">My Github Profile</p>
                    <p>Explore my projects and contributions.</p>
                  </div>
                </motion.a>

                <motion.div
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <NavLink
                    onClick={() => setDropDown(false)}
                    to="contact-me"
                    className="dropdownAnchor"
                  >
                    <div>
                      <i className="fa-solid fa-address-card"></i>
                    </div>
                    <div>
                      <p className="firstPara">Contact Me</p>
                      <p>Have a Question? Feel free to reach me..</p>
                    </div>
                  </NavLink>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle Button */}
        <ThemeToggleButton />

        <motion.button
          className="navButton settings button"
          onClick={toggleSidebar}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ marginLeft: "10px" }}
        >
          <motion.i
            className="fa-solid fa-bars"
            animate={{ rotate: isSidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="mobile-sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="sidebar-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.img
                src={logo}
                alt="Logo"
                className="sidebar-logo"
                whileTap={{ scale: 0.95 }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <ThemeToggleButton />
                <motion.button
                  className="close-btn"
                  onClick={closeSidebar}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fa-solid fa-times"></i>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="sidebar-content"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={sidebarItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="/" onClick={closeSidebar}>
                  <i className="fa-solid fa-home"></i>
                  Home
                </NavLink>
              </motion.div>

              <motion.div
                variants={sidebarItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="my-work" onClick={closeSidebar}>
                  <i className="fa-solid fa-briefcase"></i>
                  My Work
                </NavLink>
              </motion.div>

              <motion.div
                variants={sidebarItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="contact-me" onClick={closeSidebar}>
                  <i className="fa-solid fa-envelope"></i>
                  Contact Me
                </NavLink>
              </motion.div>

              <motion.div
                variants={sidebarItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to="blog" onClick={closeSidebar}>
                  <i className="fa-solid fa-newspaper"></i>
                  Blog
                </NavLink>
              </motion.div>

              <motion.div
                variants={sidebarItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://github.com/THEMEGATRON76"
                  target="_blank"
                  onClick={closeSidebar}
                >
                  <i className="fa-brands fa-github"></i>
                  My Github
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="sidebar-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <p>Made with ❤️ by Geetansh</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="sidebar-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
}
