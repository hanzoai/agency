import React from 'react'

export function Dialog({ open, onOpenChange, children }) {
  React.useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onOpenChange && onOpenChange(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])
  if (!open) return null
  return (
    <div
      onClick={() => onOpenChange && onOpenChange(false)}
      style={{position:'fixed',inset:0,zIndex:'var(--z-modal)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,background:'var(--surface-scrim)',backdropFilter:'blur(8px) saturate(140%)',animation:'hanzo-fade-up var(--duration-fast) var(--ease-out)'}}
    >
      {children}
    </div>
  )
}

export function DialogContent({ width = 480, style, children, ...rest }) {
  return (
    <div
      role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
      style={{width:'100%',maxWidth:width,maxHeight:'85vh',overflowY:'auto',padding:24,display:'flex',flexDirection:'column',gap:16,background:'var(--popover)',color:'var(--popover-foreground)',border:'1px solid var(--border-strong)',borderRadius:'var(--radius-xl)',boxShadow:'var(--edge-highlight), var(--shadow-floating)',animation:'hanzo-zoom-in var(--duration-base) var(--ease-emphasis)',...style}}
      {...rest}
    >{children}</div>
  )
}
export function DialogHeader({ style, children, ...rest }) {
  return <div style={{display:'flex',flexDirection:'column',gap:6,...style}} {...rest}>{children}</div>
}
export function DialogTitle({ style, children, ...rest }) {
  return <h2 style={{fontSize:'var(--text-lg)',fontWeight:'var(--weight-semibold)',color:'var(--text-primary)',...style}} {...rest}>{children}</h2>
}
export function DialogDescription({ style, children, ...rest }) {
  return <p style={{fontSize:'var(--text-sm)',lineHeight:'var(--leading-relaxed)',color:'var(--text-helper)',...style}} {...rest}>{children}</p>
}
export function DialogFooter({ style, children, ...rest }) {
  return <div style={{display:'flex',justifyContent:'flex-end',gap:8,...style}} {...rest}>{children}</div>
}
