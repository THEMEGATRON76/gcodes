import { motion } from "framer-motion";
import ContactMe from "../components/ContactMe";
import RecentProjects from "../components/RecentProjects";

export default function ContactUs() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <ContactMe />
    </motion.div>
  );
}