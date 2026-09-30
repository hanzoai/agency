import React from 'react'

// Same chrome as Input, to the pixel — radius, hover lift, focus halo. A
// textarea that rounds one step tighter than the field above it and lights up
// differently on focus is the kind of drift nobody reports and everybody feels.
export function Textarea({ rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false)
  const [hover, setHover] = React.useState(false)
  return (
    <textarea
      rows={rows}
      onFocus={(e)=>{setFocus(true);rest.onFocus&&rest.onFocus(e)}}
      onBlur={(e)=>{setFocus(false);rest.onBlur&&rest.onBlur(e)}}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        width:'100%',padding:'8px 12px',resize:'vertical',
        fontFamily:'var(--font-sans)',fontSize:'var(--text-control)',lineHeight:'var(--leading-relaxed)',color:'var(--foreground)',
        background: hover && !focus ? 'var(--surface-3)' : 'var(--surface-2)',
        border:'1px solid ' + (focus ? 'var(--border-focus)' : 'var(--border-control)'),
        borderRadius:'var(--radius-md)',
        outline:'none',
        boxShadow: focus ? 'var(--ring-focus)' : 'none',
        transition:'border-color var(--duration-fast) var(--ease-out), background-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    />
  )
}
