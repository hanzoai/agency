import type React from 'react';
import { Link } from 'react-router-dom';

/**
 * The site wordmark: the canonical Hanzo mark and the product name, top left.
 *
 * The mark is drawn as a CSS mask filled with the current text colour, so the
 * one source SVG follows the theme instead of needing a light and a dark file.
 * The name is two words with two weights — "Hanzo" carries the brand, "Agency"
 * names this surface — which is how hanzo.ai spells "Hanzo AI".
 *
 * The mark is the canonical asset. Never redraw it.
 */
export function Wordmark({
  to = '/',
  size = 26,
  onContextMenu,
}: {
  to?: string
  size?: number
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
      <span
        aria-hidden
        style={{
          width: size,
          height: size,
          flexShrink: 0,
          backgroundColor: 'currentColor',
          WebkitMaskImage: 'url(/images/logo/hanzo-logo-white.svg)',
          maskImage: 'url(/images/logo/hanzo-logo-white.svg)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
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
