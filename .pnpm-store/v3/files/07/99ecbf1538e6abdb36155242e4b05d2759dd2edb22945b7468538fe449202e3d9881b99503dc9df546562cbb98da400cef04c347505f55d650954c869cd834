import React from 'react'

export function Slider({ min = 0, max = 100, step = 1, value, defaultValue = 0, onChange, style, ...rest }) {
  const [inner, setInner] = React.useState(defaultValue)
  const v = value === undefined ? inner : value
  const pct = ((v - min) / (max - min)) * 100
  return (
    <input
      type="range" min={min} max={max} step={step} value={v}
      onChange={(e) => { const n = Number(e.target.value); if (value === undefined) setInner(n); onChange && onChange(n) }}
      style={{
        appearance:'none',WebkitAppearance:'none',width:'100%',height:16,background:'transparent',cursor:'pointer',
        backgroundImage:'linear-gradient(var(--primary),var(--primary)),linear-gradient(var(--glass-strong),var(--glass-strong))',
        backgroundSize: pct + '% 4px, 100% 4px',
        backgroundPosition:'left center, left center',
        backgroundRepeat:'no-repeat',
        ...style,
      }}
      {...rest}
    />
  )
}
