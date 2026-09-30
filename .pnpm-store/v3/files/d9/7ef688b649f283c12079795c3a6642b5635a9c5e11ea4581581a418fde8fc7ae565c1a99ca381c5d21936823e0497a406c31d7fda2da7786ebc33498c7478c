import React from 'react'

const listeners = new Set()
let seq = 0

/** sonner-style imperative API: toast.success('Agent started'). */
export const toast = Object.assign(
  (message, opts) => emit({ message, ...opts }),
  {
    success: (message, opts) => emit({ message, tone: 'success', ...opts }),
    error: (message, opts) => emit({ message, tone: 'error', ...opts }),
  }
)
function emit(t) {
  const item = { id: ++seq, tone: 'default', ...t }
  listeners.forEach((l) => l(item))
  return item.id
}

export function Toaster({ duration = 3500, position = 'bottom-right' }) {
  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    const add = (item) => {
      setItems((cur) => [...cur, item])
      setTimeout(() => setItems((cur) => cur.filter((i) => i.id !== item.id)), duration)
    }
    listeners.add(add)
    return () => listeners.delete(add)
  }, [duration])
  const anchor = position === 'top-right' ? { top: 24, right: 24 } : { bottom: 24, right: 24 }
  return (
    <div style={{position:'fixed',zIndex:'var(--z-toast)',display:'flex',flexDirection:'column',gap:8,...anchor}}>
      {items.map((i) => (
        <div key={i.id} style={{
          minWidth:260,maxWidth:380,padding:'12px 14px',display:'flex',alignItems:'flex-start',gap:10,
          background:'var(--surface-overlay)',border:'1px solid ' + (i.tone === 'error' ? 'var(--state-error)' : 'var(--border)'),
          borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-floating)',backdropFilter:'blur(16px)',
          fontSize:'var(--text-sm)',color:'var(--neutral-100)',animation:'hanzo-slide-up-fade var(--duration-base) var(--ease-out)',
        }}>
          {i.tone === 'success' && <span style={{width:6,height:6,marginTop:6,borderRadius:'var(--radius-full)',background:'var(--state-online)',flexShrink:0}} />}
          <span>
            {i.message}
            {i.description && <span style={{display:'block',marginTop:2,fontSize:'var(--text-xs)',color:'var(--neutral-500)'}}>{i.description}</span>}
          </span>
        </div>
      ))}
    </div>
  )
}
