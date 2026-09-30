import React from 'react'

/** Hover-and-click dropdown, matching the nav's Log in / Try Hanzo menus. */
export function DropdownMenu({ align = 'right', hover = false, trigger, style, children }) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef(null)
  React.useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])
  return (
    <span
      ref={ref}
      onMouseEnter={hover ? () => setOpen(true) : undefined}
      onMouseLeave={hover ? () => setOpen(false) : undefined}
      style={{position:'relative',display:'inline-flex',...style}}
    >
      <span onClick={() => setOpen((v) => !v)} style={{display:'inline-flex'}}>{trigger}</span>
      {open && (
        <div style={{position:'absolute',top:'100%',[align]:0,paddingTop:12,zIndex:'var(--z-dropdown)',minWidth:208}}>
          <div style={{display:'flex',flexDirection:'column',padding:6,background:'var(--surface-overlay)',border:'1px solid var(--border-strong)',borderRadius:'var(--radius-lg)',boxShadow:'var(--edge-highlight), var(--shadow-floating)',backdropFilter:'blur(20px) saturate(180%)',animation:'hanzo-zoom-in var(--duration-fast) var(--ease-emphasis)'}}>
            {children}
          </div>
        </div>
      )}
    </span>
  )
}

export function DropdownMenuItem({ desc, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false)
  return (
    <a
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{display:'block',padding: desc ? '10px 12px' : '8px 12px',borderRadius:'var(--radius-sm)',background: hover ? 'var(--glass-strong)' : 'transparent',cursor:'pointer',textDecoration:'none',transition:'background-color var(--duration-fast) var(--ease-out)',...style}}
      {...rest}
    >
      {/* --text-primary / --text-tertiary, not --neutral-100 / --neutral-500.
          The neutral ladder is a PALETTE: it does not invert, so a menu item
          painted from it rendered #f5f5f5 text on the light theme's #ffffff
          popover — the item did not change colour, it stopped being legible. */}
      <span style={{display:'block',fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:'var(--text-primary)'}}>{children}</span>
      {desc && <span style={{display:'block',marginTop:2,fontSize:'var(--text-xs)',lineHeight:'var(--leading-normal)',color:'var(--text-tertiary)'}}>{desc}</span>}
    </a>
  )
}
export function DropdownMenuLabel({ style, children, ...rest }) {
  return <span style={{padding:'6px 12px',fontSize:'var(--text-xs)',fontWeight:'var(--weight-semibold)',textTransform:'uppercase',letterSpacing:'var(--tracking-widest)',color:'var(--text-tertiary)',...style}} {...rest}>{children}</span>
}
export function DropdownMenuSeparator({ style }) {
  return <span style={{height:1,margin:'6px 4px',background:'var(--border)',...style}} />
}
