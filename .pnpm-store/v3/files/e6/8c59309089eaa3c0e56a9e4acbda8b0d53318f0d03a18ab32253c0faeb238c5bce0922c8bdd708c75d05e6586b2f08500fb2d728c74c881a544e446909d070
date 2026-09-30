import React from 'react'

/** Rank is carried by lift, never by hue (DESIGN.md §2.3).
    The rungs come off the SURFACE ladder and --glass, not off --white-*: the
    opacity ladder is white-on-white in the light theme, so a tier2 pill drawn
    from --white-15 was an invisible chip the moment a surface went light. */
const V = {
  default:{background:'var(--glass-strong)',color:'var(--text-primary)',border:'1px solid var(--border)'},
  secondary:{background:'var(--secondary)',color:'var(--secondary-foreground)',border:'1px solid transparent'},
  outline:{background:'transparent',color:'var(--text-secondary)',border:'1px solid var(--border)'},
  tier1:{background:'var(--glass)',color:'var(--text-tertiary)',border:'1px solid var(--border)'},
  tier2:{background:'var(--surface-2)',color:'var(--text-secondary)',border:'1px solid var(--border)'},
  tier3:{background:'var(--surface-3)',color:'var(--text-primary)',border:'1px solid var(--border-strong)'},
  error:{background:'var(--state-error-bg)',color:'var(--state-error-text)',border:'1px solid transparent'},
}

export function Badge({ variant = 'default', pill = true, style, children, ...rest }) {
  return (
    <span
      style={{
        display:'inline-flex',alignItems:'center',gap:6,
        padding:'3px 10px',fontSize:'var(--text-xs)',lineHeight:1.35,
        fontFamily:'var(--font-sans)',fontWeight:'var(--weight-medium)',whiteSpace:'nowrap',
        borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-sm)',
        ...(V[variant] || V.default), ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  )
}

/** The eyebrow pill above a hero headline. */
export function EyebrowBadge({ children, style, ...rest }) {
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',borderRadius:'var(--radius-full)',border:'1px solid var(--border)',background:'var(--glass)',fontSize:'var(--text-sm)',color:'var(--text-secondary)',...style}} {...rest}>{children}</span>
  )
}

/** Live-status dot + label. The green is one of the few permitted hues. */
export function StatusBadge({ status = 'online', label, style }) {
  const dot = status === 'online' ? 'var(--state-online)' : status === 'error' ? 'var(--state-error)' : 'var(--neutral-500)'
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:'var(--text-sm)',color:'var(--text-secondary)',...style}}>
      <span style={{width:8,height:8,borderRadius:'var(--radius-full)',background:dot,animation: status==='online' ? 'hanzo-pulse-dot 2s var(--ease-in-out) infinite' : 'none'}} />
      {label || status}
    </span>
  )
}
