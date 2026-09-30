import React from 'react'

const V = {
  primary:{background:'var(--primary)',color:'var(--primary-foreground)',border:'1px solid transparent'},
  secondary:{background:'var(--secondary)',color:'var(--secondary-foreground)',border:'1px solid transparent'},
  // --border-control, not --border: an outline button's edge IS the button.
  outline:{background:'transparent',color:'var(--text-primary)',border:'1px solid var(--border-control)'},
  ghost:{background:'transparent',color:'var(--text-secondary)',border:'1px solid transparent'},
  link:{background:'transparent',color:'var(--text-primary)',border:'1px solid transparent',textDecoration:'underline',textUnderlineOffset:4,padding:0,height:'auto'},
  destructive:{background:'var(--destructive)',color:'var(--destructive-foreground)',border:'1px solid transparent'},
}
const SZ = {
  sm:{height:32,padding:'0 12px',fontSize:'var(--text-xs)'},
  default:{height:36,padding:'0 16px',fontSize:'var(--text-sm)'},
  lg:{height:44,padding:'0 24px',fontSize:'var(--text-sm)'},
  icon:{height:36,width:36,padding:0},
}
// Hover, per variant. A FILLED button does not brighten on hover — its fill is
// already the top of the ink ramp — so it steps DOWN that ramp and
// gains a bloom instead, which is the reference's own move
// (.primary-btn:hover → --accent-hover + a white glow). This used to be
// `opacity: 0.9`, which faded the button toward the page: the one thing a
// hovered control must never do is look more disabled than it did at rest.
// An UNFILLED button has room to gain, so it takes a surface and an edge.
const HOVER = {
  primary:    { background:'var(--primary-hover)', boxShadow:'var(--bloom)' },
  secondary:  { background:'var(--secondary-hover)', boxShadow:'var(--edge-highlight)' },
  // An unfilled button's hover is the SURFACE arriving, not the edge moving:
  // --border-control (.15) to --border-strong (.16) is a one-percent step and
  // reads as nothing, so the fill has to carry it. --glass-strong, not --glass;
  // at .05 the fill was invisible too and the variant had no hover at all.
  outline:    { background:'var(--glass-strong)', borderColor:'var(--border-strong)', color:'var(--text-primary)' },
  ghost:      { background:'var(--glass-strong)', color:'var(--text-primary)' },
  destructive:{ background:'var(--destructive-hover)', boxShadow:'var(--bloom)' },
  link:       { textDecoration:'underline' },
}
// The filled variants catch the light along their top edge, the same way every
// raised surface in this system does.
const LIT = new Set(['primary', 'destructive'])

export function Button({ variant = 'primary', size = 'default', pill = false, disabled, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false)
  const v = V[variant] || V.primary
  const s = SZ[size] || SZ.default
  const hoverStyle = !hover || disabled ? null : HOVER[variant]
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,whiteSpace:'nowrap',
        fontFamily:'var(--font-sans)',fontWeight:'var(--weight-medium)',lineHeight:1,
        // --radius-md (8px), not --radius-sm (6px): on a 36px control that one
        // step is the difference between boxy and considered. --radius-sm keeps
        // its job on genuinely small parts (badges, chips, menu rows).
        borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-md)',
        letterSpacing:'var(--tracking-tight)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        boxShadow: LIT.has(variant) ? 'var(--edge-highlight)' : 'none',
        // `transform` is in the list because tokens/base.css scales this button
        // to .98 while it is held down, and a transform with no transition
        // snaps rather than presses.
        transition:'background-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out), transform var(--duration-press) var(--ease-out)',
        ...v, ...s, ...hoverStyle, ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
