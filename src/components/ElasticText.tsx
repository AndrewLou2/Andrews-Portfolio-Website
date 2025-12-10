// ===========================================
// ELASTIC TEXT COMPONENT
// SVG text that stretches to fill its container
// Used for the brutalist "stretched word" effect
// ===========================================

interface ElasticTextProps {
  /** The text to display */
  text: string
  /** Text color (defaults to off-white) */
  color?: string
  /** Horizontal scale factor */
  scaleX?: number
  /** Vertical scale factor */
  scaleY?: number
}

// Default styling values
const DEFAULT_COLOR = '#f5f5f0'
const FONT_SIZE = '72px'
const FONT_FAMILY = 'var(--font-bebas), Bebas Neue, Impact, sans-serif'

export default function ElasticText({ 
  text, 
  color = DEFAULT_COLOR,
  scaleX = 1,     
  scaleY = 1,      
}: ElasticTextProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <text
        x="50"
        y="53"
        fill={color}
        style={{
          fontSize: FONT_SIZE,
          fontFamily: FONT_FAMILY,
          fontWeight: 400,
          letterSpacing: '0.02em',
          transform: `scale(${scaleX}, ${scaleY})`,
          transformOrigin: '50% 50%',
          textAnchor: 'middle',
          dominantBaseline: 'central',
        }}
      >
        {text}
      </text>
    </svg>
  )
}
