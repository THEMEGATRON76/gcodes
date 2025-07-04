import { motion } from 'motion/react';
import { useTheme } from '../Context/ThemeContextProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="theme-toggle-icon"
        initial={false}
        animate={{
          rotate: theme === 'light' ? 180 : 0,
          scale: theme === 'light' ? 1.1 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {theme === 'dark' ? (
          <motion.i
            className="fa-solid fa-sun"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.i
            className="fa-solid fa-moon"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggleButton;