import React from 'react'

export function Sheet({ open, onOpenChange, side = 'right', width = 380, children }) {
  React.useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onOpenChange && onOpenChange(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])
  if (!open) return null
  const pos = side === 'left'
    ? { left: 0, top: 0, bottom: 0, width, borderRight: '1px solid var(--border)' }
    : { right: 0, top: 0, bottom: 0, width, borderLeft: '1px solid var(--border)' }
  return (
    <div onClick={() => onOpenChange && onOpenChange(false)} style={{position:'fixed',inset:0,zIndex:'var(--z-modal)',background:'var(--surface-scrim)'}}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{position:'absolute',display:'flex',flexDirection:'column',background:'var(--popover)',boxShadow:'var(--shadow-floating)',animation:'hanzo-fade-up var(--duration-base) var(--ease-out)',...pos}}
      >{children}</div>
    </div>
  )
}
export function SheetHeader({ style, children, ...rest }) {
  return <div style={{padding:'20px 24px',borderBottom:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:4,...style}} {...rest}>{children}</div>
}
export function SheetTitle({ style, children, ...rest }) {
  return <h2 style={{fontSize:'var(--text-base)',fontWeight:'var(--weight-semibold)',color:'var(--text-primary)',...style}} {...rest}>{children}</h2>
}
export function SheetContent({ style, children, ...rest }) {
  return <div style={{flex:1,overflowY:'auto',padding:24,...style}} {...rest}>{children}</div>
}
