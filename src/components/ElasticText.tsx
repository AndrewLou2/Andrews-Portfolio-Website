interface ElasticTextProps {
  text: string
  color?: string
  scaleX?: number
  scaleY?: number
}

const DEFAULT_COLOR = '#f5f5f0'
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
      style={{ overflow: 'visible' }} 
    >
      <text
        x="50"
        y="50"
        fill={color}
        dy=".35em"
        style={{
          fontSize: '72px', 
          fontFamily: FONT_FAMILY,
          fontWeight: 400,
          letterSpacing: '0.02em',
          transform: `scale(${scaleX}, ${scaleY})`,
          transformOrigin: 'center',
          textAnchor: 'middle',
          transformBox: 'fill-box', 
        }}
      >
        {text}
      </text>
    </svg>
  )
}