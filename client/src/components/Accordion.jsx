import React from 'react'
import '../styles/styles.css'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({title, icon, isOpen, onToggle, children}) => {
  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={onToggle}
        >
            <span >{icon} {title}</span>
            <motion.span
            animate={{ rotate: isOpen ? 90: 0}}
            transition={{duration: 0.2}}
            >▶
            </motion.span>
        </div>

        <AnimatePresence>
        {isOpen && (
            <motion.div 
            className="accordion-content"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: '400px', opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.04, 0.62, 0.23, 0.98]  // Custom easing for smoother animation
            }}
            style={{ 
              overflow: 'hidden',
              transformOrigin: 'top',}}
            >
                {children}
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default Accordion
