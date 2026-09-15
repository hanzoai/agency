import type React from 'react';
import { Link } from 'react-router-dom';
import { HanzoLogo } from '@hanzo/logo';

/**
 * The site wordmark: the canonical Hanzo mark and the product name, top left.
 *
 * Uses HanzoLogo from @hanzo/logo, inheriting currentColor so it adapts to the theme.
 * The name is two words with two weights — "Hanzo" carries the brand, "Agency"
 * names this surface — which is how hanzo.ai spells "Hanzo AI".
 */
export function Wordmark({
  to = '/',
  size = 26,
  showMark = false,
  onContextMenu,
}: {
  to?: string
  size?: number
  showMark?: boolean
  onContextMenu?: (e: React.MouseEvent) => void
}) {
  return (
    <Link
      to={to}
      aria-label="Hanzo Agency — home"
      onContextMenu={onContextMenu}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.38,
        textDecoration: 'none',
        color: 'inherit',
        flexShrink: 0,
      }}
    >
      {showMark && (
        <HanzoLogo size={size} className="[&>svg]:w-full [&>svg]:h-full flex-shrink-0" />
      )}
      <span
        style={{
          fontSize: size * 0.73,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        <span style={{ fontWeight: 650 }}>Hanzo</span>
        <span style={{ fontWeight: 400, opacity: 0.72, marginLeft: '0.34em' }}>Agency</span>
      </span>
    </Link>
  );
}
