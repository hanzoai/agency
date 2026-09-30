import React from 'react'

const Ctx = React.createContext({ value: null, setValue: () => {} })

export function Tabs({ defaultValue, value, onValueChange, style, children, ...rest }) {
  const [inner, setInner] = React.useState(defaultValue)
  const v = value === undefined ? inner : value
  const setValue = (n) => { if (value === undefined) setInner(n); onValueChange && onValueChange(n) }
  return (
    <Ctx.Provider value={{ value: v, setValue }}>
      <div style={{display:'flex',flexDirection:'column',gap:16,...style}} {...rest}>{children}</div>
    </Ctx.Provider>
  )
}

export function TabsList({ style, children, ...rest }) {
  return (
    // alignSelf: a segmented control is as wide as its segments. Without it the
    // list is a flex ITEM of the Tabs column and stretches to the full row,
    // which turns a compact control into a full-width bar.
    <div role="tablist" style={{display:'inline-flex',alignSelf:'flex-start',maxWidth:'100%',overflowX:'auto',alignItems:'center',gap:2,padding:3,borderRadius:'var(--radius-lg)',background:'var(--surface-2)',border:'1px solid var(--border)',...style}} {...rest}>{children}</div>
  )
}

export function TabsTrigger({ value, style, children, ...rest }) {
  const { value: active, setValue } = React.useContext(Ctx)
  const [hover, setHover] = React.useState(false)
  const on = active === value
  return (
    <button
      role="tab" aria-selected={on} onClick={() => setValue(value)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display:'inline-flex',alignItems:'center',gap:8,height:30,padding:'0 14px',
        fontFamily:'var(--font-sans)',fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',
        letterSpacing:'var(--tracking-tight)',
        color: on ? 'var(--text-primary)' : hover ? 'var(--text-secondary)' : 'var(--text-helper)',
        // The selected tab is a surface that has RISEN out of the track: it
        // lifts a rung, catches the light on its top edge and casts a small
        // drop. A selected tab that only changes colour reads as a link that
        // happens to be a different grey.
        background: on ? 'var(--surface-3)' : 'transparent',
        border:'1px solid ' + (on ? 'var(--border-strong)' : 'transparent'),
        boxShadow: on ? 'var(--edge-highlight), var(--shadow-sm)' : 'none',
        borderRadius:'calc(var(--radius-lg) - 3px)',cursor:'pointer',whiteSpace:'nowrap',
        transition:'color var(--duration-fast) var(--ease-out), background-color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-press) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >{children}</button>
  )
}

export function TabsContent({ value, style, children, ...rest }) {
  const { value: active } = React.useContext(Ctx)
  if (active !== value) return null
  return <div role="tabpanel" style={style} {...rest}>{children}</div>
}
