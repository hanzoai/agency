import React from 'react'

export function Progress({ value = 0, max = 100, height = 6, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}
      style={{position:'relative',width:'100%',height,borderRadius:'var(--radius-full)',background:'var(--glass-strong)',overflow:'hidden',...style}} {...rest}>
      <div style={{height:'100%',width:pct+'%',background:'var(--primary)',borderRadius:'var(--radius-full)',transition:'width var(--duration-base) var(--ease-out)'}} />
    </div>
  )
}
