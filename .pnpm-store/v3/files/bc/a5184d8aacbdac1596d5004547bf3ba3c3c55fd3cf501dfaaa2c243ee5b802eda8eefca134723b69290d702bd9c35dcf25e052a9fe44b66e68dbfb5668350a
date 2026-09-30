import React from 'react'

export function Label({ required = false, style, children, ...rest }) {
  return (
    <label style={{display:'inline-block',fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',color:'var(--text-secondary)',...style}} {...rest}>
      {children}{required && <span aria-hidden style={{color:'var(--text-helper)'}}> *</span>}
    </label>
  )
}
