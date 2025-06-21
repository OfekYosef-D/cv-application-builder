import React from "react";
import "../styles/styles.css";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ title, icon, isOpen, onToggle, children }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <span>
          {icon} {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▶
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial={{ height: 0 }}
            animate={{ height: "auto"}}
            exit={{ height: 0}}
            transition={{
              duration: 0.3,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
