import React from 'react'

export function Table({ style, children, ...rest }) {
  return <table style={{width:'100%',borderCollapse:'collapse',fontSize:'var(--text-sm)',...style}} {...rest}>{children}</table>
}
export function TableHeader({ style, children, ...rest }) {
  return <thead style={{background:'var(--surface-2)',...style}} {...rest}>{children}</thead>
}
export function TableBody({ style, children, ...rest }) {
  return <tbody style={style} {...rest}>{children}</tbody>
}
export function TableRow({ interactive = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false)
  return (
    <tr
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{borderTop:'1px solid var(--border)',background: hover ? 'var(--glass)' : 'transparent',cursor: interactive ? 'pointer' : 'default',transition:'background-color var(--duration-fast) var(--ease-out)',...style}}
      {...rest}
    >
      {children}
    </tr>
  )
}
export function TableHead({ align = 'left', style, children, ...rest }) {
  return <th style={{padding:'12px 24px',textAlign:align,fontWeight:'var(--weight-medium)',color:'var(--text-helper)',...style}} {...rest}>{children}</th>
}
export function TableCell({ align = 'left', style, children, ...rest }) {
  return <td style={{padding:'16px 24px',textAlign:align,color:'var(--foreground)',...style}} {...rest}>{children}</td>
}
