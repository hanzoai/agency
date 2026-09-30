import React from 'react'

/** hanzo.ai's openai-style landing header: fixed, blurred, hairline-bottomed. */
export function SiteNav({ nav = [], active, onOpen, onFocusComposer, scrolled = false }) {
  const { HanzoLogo, Button, Icon, DropdownMenu, DropdownMenuItem } = window.HanzoDesignSystem_0a9445
  return (
    <header
      onMouseLeave={() => onOpen && onOpen(null)}
      style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgb(38 38 38 / .8)', background: 'var(--surface-header)', backdropFilter: 'blur(12px)' }}
    >
      <nav style={{ display: 'flex', alignItems: 'center', gap: 8, height: 64, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px' }}>
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
          <HanzoLogo size={22} />
          <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginLeft: scrolled ? 0 : 8, width: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1, fontSize: 15, fontWeight: 600, letterSpacing: 'var(--tracking-tight)', color: '#fff', transition: 'all .25s var(--ease-in-out)' }}>Hanzo AI</span>
        </a>

        <div style={{ marginLeft: 16, display: 'flex', alignItems: 'center' }}>
          {nav.map((item) => (
            item.href ? (
              <a key={item.label} href={item.href} onMouseEnter={() => onOpen && onOpen(null)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 2, borderRadius: 'var(--radius-full)', padding: '8px 12px', fontSize: 'var(--text-sm)', color: 'var(--neutral-300)', textDecoration: 'none' }}>
                {item.label}<Icon name="ArrowUpRight" size={14} color="var(--neutral-500)" />
              </a>
            ) : (
              <button key={item.label} onMouseEnter={() => onOpen && onOpen(item.label)} aria-expanded={active === item.label}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 'var(--radius-full)', padding: '8px 12px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: active === item.label ? '#fff' : 'var(--neutral-300)', transition: 'color var(--duration-fast) var(--ease-out)' }}>
                {item.label}<Icon name="ChevronDown" size={14} color="var(--neutral-500)" />
              </button>
            )
          ))}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={onFocusComposer} aria-label="Search" style={{ display: 'inline-flex', border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 'var(--radius-full)', padding: 8, color: 'var(--neutral-300)' }}>
            <Icon name="Search" size={16} />
          </button>
          <DropdownMenu hover align="right" trigger={
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 'var(--radius-full)', padding: '8px 12px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--neutral-300)' }}>
              Log in<Icon name="ChevronDown" size={14} color="var(--neutral-500)" />
            </button>}>
            <DropdownMenuItem>Hanzo Chat</DropdownMenuItem>
            <DropdownMenuItem>API Platform</DropdownMenuItem>
            <DropdownMenuItem>Cloud</DropdownMenuItem>
          </DropdownMenu>
          <DropdownMenu hover align="right" trigger={<Button pill>Try Hanzo <Icon name="ChevronDown" size={16} /></Button>}>
            <DropdownMenuItem desc="Chat with frontier models">Hanzo Chat</DropdownMenuItem>
            <DropdownMenuItem desc="One model to command them all">Enso</DropdownMenuItem>
            <DropdownMenuItem desc="Build and ship AI apps">Hanzo App</DropdownMenuItem>
            <DropdownMenuItem desc="The creative AI studio">Hanzo Studio</DropdownMenuItem>
            <DropdownMenuItem desc="The full open-source AI cloud">Hanzo Cloud</DropdownMenuItem>
          </DropdownMenu>
        </div>
      </nav>

      {active && <MegaPanel item={nav.find((i) => i.label === active)} />}
    </header>
  )
}

/** The full-width dropout: one big "Explore <section>" column, then link columns. */
function MegaPanel({ item }) {
  if (!item || !item.explore) return null
  const cols = item.columns || []
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', borderBottom: '1px solid var(--neutral-800)', background: '#000', boxShadow: 'var(--shadow-floating)', animation: 'hanzo-fade-down var(--duration-fast) var(--ease-out)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: cols.length ? 'minmax(0,1.1fr) minmax(0,2fr)' : '1fr', gap: 40, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 32px' }}>
        <div>
          <div style={{ marginBottom: 20, fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--neutral-500)' }}>Explore {item.label}</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {item.explore.map((l) => (
              <li key={l.label}>
                <a href="#" style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-md)', padding: '6px 8px', margin: '0 -8px', textDecoration: 'none' }}>
                  <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 500, color: '#fff' }}>{l.label}</span>
                  {l.desc && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)' }}>{l.desc}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {cols.length > 0 && (
          <div style={{ display: 'grid', gap: 32, gridTemplateColumns: `repeat(${cols.length}, minmax(0,1fr))` }}>
            {cols.map((col) => (
              <div key={col.title}>
                <div style={{ marginBottom: 12, fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--neutral-500)' }}>{col.title}</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href="#" style={{ display: 'block', borderRadius: 'var(--radius-md)', padding: '6px 8px', margin: '0 -8px', textDecoration: 'none' }}>
                        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--neutral-100)' }}>{link.label}</span>
                        {link.desc && <span style={{ display: 'block', marginTop: 2, fontSize: 'var(--text-xs)', color: 'var(--neutral-500)' }}>{link.desc}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/** The minimal apex footer: mark + one line, four link columns, hairline base. */
export function SiteFooter({ columns = [] }) {
  const { HanzoLogo, Icon } = window.HanzoDesignSystem_0a9445
  return (
    <footer style={{ borderTop: '1px solid var(--neutral-900)', padding: '56px 32px' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(5, minmax(0,1fr))' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><HanzoLogo size={22} /><span style={{ fontSize: 15, fontWeight: 600, letterSpacing: 'var(--tracking-tight)', color: '#fff' }}>Hanzo</span></span>
            <p style={{ marginTop: 12, maxWidth: '16rem', fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>The AI cloud for agents and apps.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div style={{ marginBottom: 12, fontSize: 'var(--text-xs)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--neutral-500)' }}>{col.title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((l) => <li key={l}><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-400)', textDecoration: 'none' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--neutral-900)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>© {new Date().getFullYear()} Hanzo AI, Inc. All rights reserved.</p>
          <a href="#" aria-label="Hanzo on GitHub" style={{ color: 'var(--neutral-500)' }}><Icon name="Github" size={20} /></a>
        </div>
      </div>
    </footer>
  )
}
