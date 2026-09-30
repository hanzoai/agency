import React from 'react'

/** Lucide glyph renderer. Hanzo uses lucide-react 0.462.0 and no other icon set;
 *  in a plain browser page the same set arrives as the lucide UMD bundle, which
 *  this component reads. Load it once per page:
 *  <script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.js"></script> */
const pascal = (n) => n.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase())

function lookup(name) {
  const g = typeof window !== 'undefined' ? window.lucide : null
  if (!g) return null
  const set = g.icons || g
  return set[name] || set[pascal(name)] || null
}

export function Icon({ name, size = 16, strokeWidth = 2, color = 'currentColor', style, ...rest }) {
  const node = lookup(name)
  const kids = []
  if (Array.isArray(node)) {
    node.forEach((child, i) => {
      if (Array.isArray(child)) kids.push(React.createElement(child[0], { key: i, ...child[1] }))
      else if (child && child.tag) kids.push(React.createElement(child.tag, { key: i, ...child.attrs }))
    })
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block', ...style }}
      {...rest}
    >
      {kids}
    </svg>
  )
}
