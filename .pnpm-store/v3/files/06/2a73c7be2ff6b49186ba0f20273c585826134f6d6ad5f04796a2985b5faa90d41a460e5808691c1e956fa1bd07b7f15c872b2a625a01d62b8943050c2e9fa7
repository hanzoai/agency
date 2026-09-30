/** Pill label. Tier/rank is expressed with the white opacity ladder, never hue. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** tier1/2/3 map to white/5, white/15, white/20 — the rank ladder. error is the only hued variant. */
  variant?: 'default' | 'secondary' | 'outline' | 'tier1' | 'tier2' | 'tier3' | 'error';
  pill?: boolean;
}
export function Badge(props: BadgeProps): JSX.Element;
export function EyebrowBadge(props: React.HTMLAttributes<HTMLSpanElement>): JSX.Element;
export interface StatusBadgeProps { status?: 'online' | 'idle' | 'error'; label?: string }
export function StatusBadge(props: StatusBadgeProps): JSX.Element;
