import React from 'react'

const FILL = {
  default:'var(--surface-card)',
  emphasis:'var(--surface-card-emphasis)',
  quiet:'var(--surface-card-quiet)',
  plain:'transparent',
}

export function Card({ variant = 'default', sheen = false, interactive = false, selected = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false)
  const edge = selected ? 'var(--border-selected)' : hover ? 'var(--border-strong)' : 'var(--border)'
  return (
    <div
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        position:'relative',overflow:'hidden',
        borderRadius:'var(--radius-lg)',
        border:'1px solid ' + edge,
        background:FILL[variant] || FILL.default,
        // The card catches the light along its top edge at rest, and picks up a
        // real drop only when it lifts. A shadow on a resting card is noise; a
        // card with NO inset highlight is a coloured rectangle rather than a
        // surface, which is why the highlight is unconditional and the drop is
        // not. See tokens/elevation.css for why this is the part that matters
        // on a near-black ground.
        boxShadow: hover ? 'var(--edge-highlight), var(--shadow-lg)' : 'var(--edge-highlight)',
        transform: hover ? 'translateY(-1px)' : 'none',
        transition:'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {/* The top hairline: brightest at the centre, dissolved before either
          corner, so the edge never terminates in a hard stop. */}
      <div aria-hidden style={{position:'absolute',top:0,left:0,right:0,height:1,pointerEvents:'none',background:'var(--sheen-edge)'}} />
      {sheen && <div aria-hidden style={{position:'absolute',inset:0,pointerEvents:'none',background:'var(--sheen-card)',opacity:0.7}} />}
      {children}
    </div>
  )
}

export function CardHeader({ style, children, ...rest }) {
  return <div style={{position:'relative',padding:'24px 24px 0',display:'flex',flexDirection:'column',gap:6,...style}} {...rest}>{children}</div>
}
export function CardTitle({ style, children, ...rest }) {
  // --text-lg over --text-base: at 14px a title sat one point above its own
  // 13px description, which is not a hierarchy, it is a rounding error. The
  // step up plus the tighter tracking is what makes a card scannable.
  return <h3 style={{fontSize:'var(--text-lg)',fontWeight:'var(--weight-semibold)',letterSpacing:'var(--tracking-tight)',color:'var(--text-primary)',...style}} {...rest}>{children}</h3>
}
export function CardDescription({ style, children, ...rest }) {
  return <p style={{fontSize:'var(--text-sm)',lineHeight:'var(--leading-relaxed)',color:'var(--text-tertiary)',...style}} {...rest}>{children}</p>
}
export function CardContent({ style, children, ...rest }) {
  return <div style={{position:'relative',padding:24,...style}} {...rest}>{children}</div>
}
export function CardFooter({ style, children, ...rest }) {
  return <div style={{position:'relative',padding:'0 24px 24px',display:'flex',alignItems:'center',gap:12,...style}} {...rest}>{children}</div>
}
