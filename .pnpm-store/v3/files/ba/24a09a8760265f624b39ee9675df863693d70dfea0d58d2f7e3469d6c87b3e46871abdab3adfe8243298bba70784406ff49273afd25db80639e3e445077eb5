import React from 'react'

const Ctx = React.createContext({ open: null, toggle: () => {} })

export function Accordion({ type = 'single', defaultValue = null, style, children, ...rest }) {
  const [open, setOpen] = React.useState(type === 'multiple' ? [].concat(defaultValue || []) : defaultValue)
  const toggle = (v) => {
    if (type === 'multiple') setOpen((cur) => (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]))
    else setOpen((cur) => (cur === v ? null : v))
  }
  const isOpen = (v) => (type === 'multiple' ? open.includes(v) : open === v)
  return (
    <Ctx.Provider value={{ isOpen, toggle }}>
      <div style={{borderTop:'1px solid var(--border)',...style}} {...rest}>{children}</div>
    </Ctx.Provider>
  )
}

export function AccordionItem({ value, title, style, children, ...rest }) {
  const { isOpen, toggle } = React.useContext(Ctx)
  const on = isOpen(value)
  return (
    <div style={{borderBottom:'1px solid var(--border)',...style}} {...rest}>
      <button
        onClick={() => toggle(value)} aria-expanded={on}
        style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',gap:16,padding:'18px 0',background:'transparent',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-sans)',fontSize:'var(--text-base)',fontWeight:'var(--weight-medium)',color:'var(--text-primary)'}}
      >
        {title}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-helper)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0,transform: on ? 'rotate(180deg)' : 'none',transition:'transform var(--duration-fast) var(--ease-out)'}}><polyline points="6 9 12 15 18 9" /></svg>
      </button>
      {on && <div style={{paddingBottom:20,fontSize:'var(--text-sm)',lineHeight:'var(--leading-relaxed)',color:'var(--text-helper)',maxWidth:'62ch'}}>{children}</div>}
    </div>
  )
}

export const AccordionTrigger = ({ children }) => children
export const AccordionContent = ({ children }) => children
