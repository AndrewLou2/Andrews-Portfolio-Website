'use client'

import { useState } from 'react'
import LouSection from '@/components/LouSection'
import AboutSection from '@/components/AboutSection'
import PortfolioSection from '@/components/PortfolioSection'
import ElasticText from '@/components/ElasticText'

// ===========================================
// LAYOUT CONFIGURATION
// ===========================================

// Flex values for column widths
const FLEX_CONFIG = {
  // Left column
  left: { default: 1, expanded: 1.5, compressed: 0.6 },
  // Right column
  right: { default: 1.4, expanded: 2, compressed: 0.8 },
  // LOU section (40% of left column by default)
  lou: { default: 0.66, expanded: 1.2, compressed: 0.4 },
  // ABOUT section (60% of left column by default)
  about: { default: 1, expanded: 1.5, compressed: 0.5 },
}

// CSS transition for elastic flex animations
const FLEX_TRANSITION = 'flex 700ms cubic-bezier(0.25, 1, 0.5, 1)'

// ===========================================
// MAIN COMPONENT
// ===========================================

export default function Home() {
  // Hover states
  const [hoveredColumn, setHoveredColumn] = useState<'left' | 'right' | null>(null)
  const [hoveredRow, setHoveredRow] = useState<'lou' | 'about' | null>(null)
  
  // Active section (for click-to-reveal content)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Toggle section content visibility
  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  // Calculate flex values based on hover state
  const getColumnFlex = (column: 'left' | 'right') => {
    const config = FLEX_CONFIG[column]
    if (hoveredColumn === column) return config.expanded
    if (hoveredColumn !== null) return config.compressed
    return config.default
  }

  const getRowFlex = (row: 'lou' | 'about') => {
    const config = FLEX_CONFIG[row]
    if (hoveredRow === row) return config.expanded
    if (hoveredRow !== null) return config.compressed
    return config.default
  }

  return (
    <main className="min-h-screen bg-bg">
      
      {/* =========== DESKTOP LAYOUT =========== */}
      <div className="hidden md:flex h-screen w-screen overflow-hidden">
        
        {/* Left Column (LOU + ABOUT) */}
        <div
          className="h-full flex flex-col section-border-right"
          style={{ flex: getColumnFlex('left'), transition: FLEX_TRANSITION }}
          onMouseEnter={() => setHoveredColumn('left')}
          onMouseLeave={() => setHoveredColumn(null)}
        >
          {/* LOU Section */}
          <div
            className="relative cursor-pointer section-border"
            style={{ flex: getRowFlex('lou'), transition: FLEX_TRANSITION }}
            onMouseEnter={() => setHoveredRow('lou')}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => toggleSection('lou')}
          >
            <LouSection 
              isActive={activeSection === 'lou'} 
              onToggle={() => toggleSection('lou')} 
            />
          </div>

          {/* ABOUT Section */}
          <div
            className="relative cursor-pointer"
            style={{ flex: getRowFlex('about'), transition: FLEX_TRANSITION }}
            onMouseEnter={() => setHoveredRow('about')}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => toggleSection('about')}
          >
            <AboutSection 
              isActive={activeSection === 'about'} 
              onToggle={() => toggleSection('about')} 
            />
          </div>
        </div>

        {/* Right Column (PORTFOLIO) */}
        <div
          className="h-full relative"
          style={{ flex: getColumnFlex('right'), transition: FLEX_TRANSITION }}
          onMouseEnter={() => setHoveredColumn('right')}
          onMouseLeave={() => setHoveredColumn(null)}
        >
          <PortfolioSection />
        </div>
      </div>

      {/* =========== MOBILE LAYOUT =========== */}
      <div className="md:hidden flex flex-col">
        
        {/* LOU Section */}
        <div
          className="h-[20vh] relative cursor-pointer section-border"
          onClick={() => toggleSection('lou')}
        >
          <div className="section-container">
            <ElasticText text="LOU" />
          </div>
          <LouSection 
            isActive={activeSection === 'lou'} 
            onToggle={() => toggleSection('lou')} 
          />
        </div>

        {/* ABOUT Section */}
        <div
          className="h-[30vh] relative cursor-pointer section-border"
          onClick={() => toggleSection('about')}
        >
          <div className="section-container">
            <ElasticText text="ABOUT" />
          </div>
          <AboutSection 
            isActive={activeSection === 'about'} 
            onToggle={() => toggleSection('about')} 
          />
        </div>

        {/* PORTFOLIO Section */}
        <div className="min-h-[50vh] relative">
          <PortfolioSection />
        </div>
      </div>
    </main>
  )
}
