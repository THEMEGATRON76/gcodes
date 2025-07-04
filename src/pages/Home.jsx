import RecentProjects from "../components/RecentProjects";
import TechTag from "../components/TechTag";
import "./home.css";
import cmis from "../assets/workWebsite/Cedric.png";
import reactNative from "../assets/symbols/icons8-react-48.png";
import ContactMe from "../components/ContactMe";
import { techIknow } from "../data/techIknow";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import {homeWork} from "../data/myWorkData";

export default function Home() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section
        id="about-me"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="PictureCard" variants={fadeInUp}>
          <motion.h3 variants={fadeInUp}>ABOUT ME</motion.h3>
          <motion.h1 variants={fadeInUp}>Hey, I'm Geetansh</motion.h1>

          <motion.p variants={fadeInUp}>
            Full Stack dev from Jaipur transforming coffee into fast, sleek
            apps. 3+ years of being awesome with React, Vue, Node.js & beyond. I
            combine logic, design, and a pinch of magic to make real problems
            look stunning. Always coding, always learning, always pushing pixels
            and possibilities.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <h3>🚀 MY MISSION</h3>
            <p>
              To merge the art of design with the science of development —
              creating user-first applications that perform as great as they
              look. I believe in clean code, smooth UX, and delivering results
              that speak. Keep building. Keep learning. Never settle. 🛠️✨
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="GitHubData" variants={fadeInUp}>
          <motion.a href="" variants={fadeInUp}>
            <i className="fa-solid fa-star"></i> 0 stars
          </motion.a>
          <motion.a href="" variants={fadeInUp}>
            <i className="fa-solid fa-code-fork"></i> 0 repositories forks
          </motion.a>
          <motion.a href="" variants={fadeInUp}>
            <i className="fa-solid fa-code-branch"></i> 0 commits{" "}
          </motion.a>
          <motion.a href="" variants={fadeInUp}>
            <i className="fa-solid fa-users"></i> 0 Github followers
          </motion.a>
        </motion.div>

        <motion.div
          className="aboutContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>About me .</motion.h1>
          <div>
            <motion.div className="paras" variants={slideInLeft}>
              <motion.p variants={fadeInUp}>
                My journey began with curiosity and a stubborn Google search,
                "how to build a website." What started as basic HTML and CSS
                turned into late-night experiments and an increasing obsession
                with how things work behind the scenes.
              </motion.p>
              <motion.p variants={fadeInUp}>
                As my passion grew, so did my skills. I explored JavaScript and
                mastered frameworks like React and Vue. I also worked with
                Node.js. Each bug, build, and breakthrough taught me something
                new; I learned about clean architecture and performance
                optimization.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Now, with over 3 years of experience, I focus on creating apps
                that are not only functional but also enjoyable. Whether I'm
                designing smooth UIs or writing logic that simply works, I'm
                still learning, still building, and still just getting started.
              </motion.p>

              <motion.div className="buttonHolder" variants={fadeInUp}>
                <motion.div
                  whileTap={{ scale: 0.8 }}
                >
                  <a
                    href="https://github.com/THEMEGATRON76"
                    target="_blank"
                    className="gitHubButton button"
                  >
                    <i className="fa-brands fa-github"></i> View my Github{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </motion.div>

                <motion.div
                  whileTap={{ scale: 0.8 }}
                >
                <NavLink to={"contact-me"} className="contactMeButton button">
                  <i className="fa-brands"></i>Contact Me{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="flashCard" variants={slideInRight}>
              <motion.h3 variants={fadeInUp}>
                <i className="fa-solid fa-file-code codefile"></i> MY STUDIO
              </motion.h3>
              <motion.p variants={fadeInUp}>
                Hey there! 👋 I'm Geetansh welcome to my digital playground.
                More than just a portfolio, this is where creativity, code, and
                curiosity collide. Dive in and explore my journey.
              </motion.p>
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                Download CV
              </motion.button>

              <motion.div variants={staggerContainer}>
                <motion.div
                  className="smallCard"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <i className="fa-solid fa-laptop-code codefile"></i>
                  <h4>Web Development</h4>
                  <p>
                    Building high-performance websites with clean code and
                    strong SEO fundamentals.
                  </p>
                </motion.div>

                <motion.div
                  className="smallCard smallMargin"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <i className="fa-solid fa-paintbrush codefile"></i>
                  <h4>UI / UX</h4>
                  <p>
                    Crafting modern, intuitive user interfaces that engage and
                    convert users.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        id="recentProjects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <RecentProjects projects={homeWork} page="home" />
      </motion.div>

      <motion.div
        className="sectionSkills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeInUp}>Technologies I use.</motion.h1>
        <motion.p variants={fadeInUp}>
          Over the years, I have worked with a variety of technologies. Here are
          some of the technologies I have experience with:
        </motion.p>
        <motion.div id="TechDiv" variants={staggerContainer}>
          {techIknow.map((tech, index) => {
            return <TechTag name={tech.name} img={tech.img} alt={tech.alt} />;
          })}
        </motion.div>
        <motion.p className="centerpara" variants={fadeInUp}>
          ...and many more
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <ContactMe />
      </motion.div>
    </>
  );
}
