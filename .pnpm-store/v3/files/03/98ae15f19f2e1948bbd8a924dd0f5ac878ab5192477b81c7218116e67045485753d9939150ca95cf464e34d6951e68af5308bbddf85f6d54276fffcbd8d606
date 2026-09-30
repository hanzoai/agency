import React from 'react'

export function Checkbox({ checked, defaultChecked, onChange, disabled, label, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked)
  const on = checked === undefined ? inner : checked
  const toggle = () => {
    if (disabled) return
    if (checked === undefined) setInner(!on)
    onChange && onChange(!on)
  }
  const box = (
    <span
      role="checkbox" aria-checked={on} tabIndex={disabled ? -1 : 0}
      onClick={toggle}
      onKeyDown={(e)=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();toggle()}}}
      style={{
        display:'inline-flex',alignItems:'center',justifyContent:'center',width:16,height:16,flexShrink:0,
        borderRadius:4,border:'1px solid ' + (on ? 'var(--primary)' : 'var(--border-control)'),
        background: on ? 'var(--primary)' : 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition:'background-color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {on && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--primary-foreground)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
      )}
    </span>
  )
  if (!label) return box
  return <span style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:'var(--text-sm)',color:'var(--text-secondary)'}}>{box}{label}</span>
}
