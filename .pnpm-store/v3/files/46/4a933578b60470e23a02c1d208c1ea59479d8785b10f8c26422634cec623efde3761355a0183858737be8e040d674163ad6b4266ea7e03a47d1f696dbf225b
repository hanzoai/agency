import React from 'react'

export function Input({ invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false)
  const [hover, setHover] = React.useState(false)
  return (
    <input
      onFocus={(e)=>{setFocus(true);rest.onFocus&&rest.onFocus(e)}}
      onBlur={(e)=>{setFocus(false);rest.onBlur&&rest.onBlur(e)}}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        width:'100%',height:36,padding:'0 12px',
        fontFamily:'var(--font-sans)',fontSize:'var(--text-control)',color:'var(--foreground)',
        // A hovered field lifts its SURFACE. Moving its edge from .15 to .16
        // is a state you cannot see, and a state you cannot see is dead code.
        background: hover && !focus ? 'var(--surface-3)' : 'var(--surface-2)',
        border:'1px solid ' + (invalid ? 'var(--state-error)' : focus ? 'var(--border-focus)' : 'var(--border-control)'),
        borderRadius:'var(--radius-md)',
        outline:'none',
        // Focus is the edge brightening plus a soft halo just outside it — the
        // reference's .composer-box:focus-within, and the same recipe
        // tokens/base.css gives a bare <input>. Not a second hard ring.
        boxShadow: focus ? 'var(--ring-focus)' : 'none',
        transition:'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    />
  )
}
