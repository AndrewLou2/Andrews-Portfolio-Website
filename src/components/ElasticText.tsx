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
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform={`translate(50, 55) scale(${scaleX}, ${scaleY}) translate(-50, -55)`}>
        <text
          x="50"
          y="55"
          fill={color}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: '72px',
            fontFamily: FONT_FAMILY,
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          {text}
        </text>
      </g>
    </svg>
  )
}
