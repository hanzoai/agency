import React from 'react'

export function Avatar({ size = 32, style, children, ...rest }) {
  return (
    <span style={{position:'relative',display:'inline-flex',alignItems:'center',justifyContent:'center',width:size,height:size,flexShrink:0,borderRadius:'var(--radius-full)',overflow:'hidden',border:'1px solid var(--border)',background:'linear-gradient(to bottom right,var(--muted-foreground),var(--surface-3))',...style}} {...rest}>
      {children}
    </span>
  )
}
export function AvatarImage({ src, alt = '', style, ...rest }) {
  return <img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',...style}} {...rest} />
}
export function AvatarFallback({ style, children, ...rest }) {
  return <span style={{fontSize:'var(--text-xs)',fontWeight:'var(--weight-medium)',color:'var(--text-secondary)',...style}} {...rest}>{children}</span>
}
