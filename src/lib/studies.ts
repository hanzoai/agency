export interface StudyCard {
  id: string
  title: string
  company: string
  industry: string
  image: string
}

/** Portfolio cards with a real cover. Order is the fill when a page names fewer than three. */
export const FEATURED: StudyCard[] = [
  {
    id: 'damon-motorcycles',
    title: 'Electric motorcycle market analysis',
    company: 'Damon Motorcycles',
    industry: 'Automotive',
    image: '/images/damon/cover.jpg',
  },
  {
    id: 'trillerfest',
    title: 'Largest virtual music festival',
    company: 'Triller',
    industry: 'Media',
    image: '/images/triller/cover.png',
  },
  {
    id: 'bellabeat',
    title: "Women's health wearable platform",
    company: 'Bellabeat',
    industry: 'Health',
    image: '/images/bellabeat/cover.jpg',
  },
  {
    id: 'casper-blockchain',
    title: 'Enterprise blockchain launch',
    company: 'Casper',
    industry: 'Blockchain',
    image: '/images/casper/cover.jpg',
  },
  {
    id: 'unikoin-gold',
    title: '120,000 ETH token launch',
    company: 'Unikoin Gold',
    industry: 'Gaming',
    image: '/images/unikrn/cover.jpg',
  },
  {
    id: 'cover-build',
    title: 'Prefab housing product launch',
    company: 'Cover',
    industry: 'Construction',
    image: '/images/cover/cover.jpg',
  },
  {
    id: 'myle-tap',
    title: 'Wearable product launch',
    company: 'Myle',
    industry: 'Consumer',
    image: '/images/myle/cover.jpg',
  },
]

const BY_ID = new Map(FEATURED.map((study) => [study.id, study]))

/** A page's own cards first, then the featured set, always three, never a repeat. */
export function threeStudies(preferred: StudyCard[] = []): StudyCard[] {
  const out: StudyCard[] = []
  const seen = new Set<string>()
  const take = (card: StudyCard) => {
    if (!card?.id || seen.has(card.id) || out.length >= 3) return
    seen.add(card.id)
    out.push(card)
  }
  for (const card of preferred) take(card)
  for (const card of FEATURED) take(card)
  return out
}

const PICKS: Record<string, string[]> = {
  cloud: ['casper-blockchain', 'unikoin-gold', 'cover-build'],
  cybersecurity: ['casper-blockchain', 'damon-motorcycles', 'unikoin-gold'],
  'data-ai': ['bellabeat', 'unikoin-gold', 'trillerfest'],
  'digital-engineering': ['damon-motorcycles', 'casper-blockchain', 'myle-tap'],
  'emerging-tech': ['casper-blockchain', 'cover-build', 'unikoin-gold'],
  'finance-risk': ['unikoin-gold', 'casper-blockchain', 'damon-motorcycles'],
  'aerospace-defense': ['casper-blockchain', 'damon-motorcycles', 'cover-build'],
  automotive: ['damon-motorcycles', 'cover-build', 'myle-tap'],
  banking: ['unikoin-gold', 'casper-blockchain', 'damon-motorcycles'],
  'capital-markets': ['unikoin-gold', 'casper-blockchain', 'trillerfest'],
  chemicals: ['cover-build', 'casper-blockchain', 'bellabeat'],
  'communications-media': ['trillerfest', 'bellabeat', 'unikoin-gold'],
  'consumer-goods': ['bellabeat', 'myle-tap', 'damon-motorcycles'],
}

export function studiesFor(key: string | null | undefined): StudyCard[] {
  const ids = (key && PICKS[key]) || []
  return threeStudies(ids.map((id) => BY_ID.get(id)).filter((card): card is StudyCard => Boolean(card)))
}
