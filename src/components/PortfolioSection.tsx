'use client'

import ElasticText from './ElasticText'
import { GitHubIcon, ExternalLinkIcon } from './icons'
import { PROJECTS, EXPERIENCE, type Project, type Experience } from '@/data/portfolio'

// ===========================================
// SUB-COMPONENTS
// ===========================================

/** Single experience card */
function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="experience-card">
      {/* Header: Company + Period */}
      <div className="flex justify-between items-baseline gap-2 mb-1">
        <span className="heading-sm">{experience.title}</span>
        <span className="meta-text">{experience.period}</span>
      </div>
      
      {/* Role */}
      <span className="label-text block mb-2">{experience.role}</span>
      
      {/* Description */}
      <p className="body-text">{experience.description}</p>
    </div>
  )
}

/** Project links (GitHub + Preview) */
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      {project.github && (
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
          title="View on GitHub"
        >
          <GitHubIcon />
        </a>
      )}
      {project.preview && (
        <a 
          href={project.preview} 
          target="_blank" 
          rel="noopener noreferrer"
          className="icon-link"
          title="View Live"
        >
          <ExternalLinkIcon />
        </a>
      )}
      <span className="meta-text">{project.year}</span>
    </div>
  )
}

/** Single project card */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group list-item">
      {/* Header: Title + Links */}
      <div className="flex justify-between items-start gap-2 mb-1">
        <span className="heading-sm text-text/80 group-hover:text-text transition-colors">
          {project.title}
        </span>
        <ProjectLinks project={project} />
      </div>
      
      {/* Description */}
      <p className="body-text mb-2">{project.description}</p>
      
      {/* Tech stack */}
      <span className="body-text-muted">{project.category}</span>
    </div>
  )
}

/** Experience section */
function ExperienceSection() {
  return (
    <div className="section-padding section-border flex-shrink-0">
      <h2 className="heading-md mb-6">EXPERIENCE</h2>
      <div className="space-y-6">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.title} experience={exp} />
        ))}
      </div>
    </div>
  )
}

/** Projects section */
function ProjectsSection() {
  return (
    <div className="section-padding section-border flex-shrink-0">
      <h2 className="heading-md mb-6">PROJECTS</h2>
      <div className="space-y-0">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

// ===========================================
// MAIN COMPONENT
// ===========================================

export default function PortfolioSection() {
  return (
    <div className="absolute inset-0 flex flex-col bg-bg overflow-y-auto portfolio-scroll">
      {/* Elastic text header */}
      <div className="relative w-full h-full flex-shrink-0">
        <ElasticText 
          text="PORTFOLIO" 
          scaleX={0.4}
          scaleY={2}
        />
      </div>

      {/* Experience */}
      <ExperienceSection />

      {/* Projects */}
      <ProjectsSection />
    </div>
  )
}
