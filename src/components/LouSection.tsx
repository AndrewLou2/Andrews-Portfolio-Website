'use client'

import { motion, AnimatePresence } from 'framer-motion'
import ElasticText from './ElasticText'

// ===========================================
// TYPES
// ===========================================

interface LouSectionProps {
  isActive: boolean
  onToggle: () => void
}

// ===========================================
// ANIMATION CONFIG
// ===========================================

const FADE_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
}

const SLIDE_UP_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// ===========================================
// CONTACT LINKS DATA
// ===========================================

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:louandrew123@gmail.com', external: false },
  { label: 'GitHub', href: 'https://github.com/AndrewLou2', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-lou/', external: true },
]

// ===========================================
// SUB-COMPONENTS
// ===========================================

function ContactLinks() {
  return (
    <motion.div 
      className="flex flex-row gap-4 justify-center"
      {...SLIDE_UP_ANIMATION}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {CONTACT_LINKS.map((link) => (
        <a 
          key={link.label}
          href={link.href} 
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="link-hover nav-link"
        >
          {link.label}
        </a>
      ))}
    </motion.div>
  )
}

function LouContent({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div {...FADE_ANIMATION} className="content-overlay-centered">
          <div className="text-center">
            {/* Name */}
            <motion.h1 
              className="heading-xl mb-3"
              {...SLIDE_UP_ANIMATION}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              ANDREW
            </motion.h1>
            
            {/* Contact Links */}
            <ContactLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ===========================================
// MAIN COMPONENT
// ===========================================

export default function LouSection({ isActive }: LouSectionProps) {
  return (
    <>
      {/* Background with elastic text */}
      <div className="section-container">
        <ElasticText 
          text="LOU" 
          scaleX={1.2}
          scaleY={2}
        />
      </div>
      
      {/* Overlay content (shown on click) */}
      <LouContent show={isActive} />
    </>
  )
}
