'use client'

import { motion, AnimatePresence } from 'framer-motion'
import ElasticText from './ElasticText'

// ===========================================
// TYPES
// ===========================================

interface AboutSectionProps {
  isActive: boolean
  onToggle: () => void
}

// ===========================================
// CONTENT DATA
// ===========================================

const BIO = "Code is just my tool; creation is my purpose."

const SKILLS = [
  'JavaScript', 
  'TypeScript', 
  'React', 
  'Node.js', 
  'Python', 
  'Java', 
  'C++', 
  'SQL', 
  'ASP.NET'
]

// ===========================================
// ANIMATION CONFIG
// ===========================================

const FADE_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
}

const SLIDE_LEFT_ANIMATION = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
}

const SLIDE_UP_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// ===========================================
// SUB-COMPONENTS
// ===========================================

function SkillTags() {
  return (
    <motion.div 
      className="mt-6 flex flex-wrap gap-2"
      {...SLIDE_UP_ANIMATION}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {SKILLS.map((skill) => (
        <span key={skill} className="skill-tag">
          {skill}
        </span>
      ))}
    </motion.div>
  )
}

function AboutContent({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div {...FADE_ANIMATION} className="content-overlay-scrollable">
          <div className="max-w-lg">
            {/* Heading */}
            <motion.h2 
              className="heading-lg mb-5"
              {...SLIDE_LEFT_ANIMATION}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              ABOUT ME
            </motion.h2>
            
            {/* Bio */}
            <motion.div 
              className="space-y-3"
              {...SLIDE_LEFT_ANIMATION}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="body-text">{BIO}</p>
            </motion.div>
            
            {/* Skills */}
            <SkillTags />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ===========================================
// MAIN COMPONENT
// ===========================================

export default function AboutSection({ isActive }: AboutSectionProps) {
  return (
    <>
      {/* Background with elastic text */}
      <div className="section-container">
        <ElasticText 
          text="ABOUT" 
          scaleX={0.7}
          scaleY={2}
        />
      </div>
      
      {/* Overlay content (shown on click) */}
      <AboutContent show={isActive} />
    </>
  )
}
