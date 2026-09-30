import React from 'react'

/** The canonical Hanzo headline treatment: white → white/60 chrome gradient,
 *  clipped to the text. Never a saturated or rainbow gradient. */
export function ChromeText({ as = 'span', tone = 'chrome', preHeading, preHeadingStyle, style, children, ...rest }) {
  const Tag = as
  const gradient = tone === 'deep' ? 'var(--gradient-chrome-2)' : 'var(--gradient-chrome)'
  const node = (
    <Tag
      style={{
        backgroundImage:gradient,
        WebkitBackgroundClip:'text',backgroundClip:'text',
        WebkitTextFillColor:'transparent',color:'transparent',
        display:'inline-block',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
  if (!preHeading) return node
  return (
    <span style={{display:'flex',flexDirection:'column',gap:12,alignItems:'inherit'}}>
      <span style={{fontSize:'var(--text-xs)',fontWeight:'var(--weight-semibold)',textTransform:'uppercase',letterSpacing:'var(--tracking-widest)',color:'var(--text-helper)',...preHeadingStyle}}>{preHeading}</span>
      {node}
    </span>
  )
}
