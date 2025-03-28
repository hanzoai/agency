import { SocialLink } from '@/components/SocialLinks';

interface CompanySocialData {
  companyName: string;
  links: SocialLink[];
  totalFollowers?: number;
}

export const socialLinksData: Record<string, CompanySocialData> = {
  'cover-build': {
    companyName: 'Cover Build',
    links: [
      { platform: 'Website', url: 'https://www.cover.build' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/coverbuild' },
      { platform: 'Instagram', url: 'https://www.instagram.com/coverbuild' },
      { platform: 'Facebook', url: 'https://www.facebook.com/coverbuild' },
      { platform: 'Twitter', url: 'https://twitter.com/coverbuild' }
    ]
  },
  'bellabeat': {
    companyName: 'Bellabeat',
    links: [
      { platform: 'Website', url: 'https://www.bellabeat.com' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/bellabeat' },
      { platform: 'Instagram', url: 'https://www.instagram.com/bellabeat' },
      { platform: 'Facebook', url: 'https://www.facebook.com/bellabeat' },
      { platform: 'Twitter', url: 'https://twitter.com/bellabeat' },
      { platform: 'Youtube', url: 'https://www.youtube.com/channel/UCX8u0w3VwZQk0jG5vH1V9zQ' }
    ],
    totalFollowers: 114000
  },
  'trillerfest': {
    companyName: 'Triller',
    links: [
      { platform: 'Website', url: 'https://www.triller.co' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/triller' },
      { platform: 'Instagram', url: 'https://www.instagram.com/triller' },
      { platform: 'Facebook', url: 'https://www.facebook.com/triller' },
      { platform: 'Twitter', url: 'https://twitter.com/triller' },
      { platform: 'Youtube', url: 'https://www.youtube.com/channel/UCX8u0w3VwZQk0jG5vH1V9zQ' },
      { platform: 'TikTok', url: 'https://www.tiktok.com/@triller' }
    ],
    totalFollowers: 7204000
  },
  'unikoin-gold': {
    companyName: 'Unikoin Gold',
    links: [
      { platform: 'Website', url: 'https://www.unikoingold.com' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/unikoingold' },
      { platform: 'Twitter', url: 'https://twitter.com/unikoingold' },
      { platform: 'Facebook', url: 'https://www.facebook.com/unikoingold' }
    ]
  },
  'casper-blockchain': {
    companyName: 'Casper Blockchain',
    links: [
      { platform: 'Website', url: 'https://www.casperlabs.io' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/casperlabs' },
      { platform: 'Twitter', url: 'https://twitter.com/casper_network' },
      { platform: 'Telegram', url: 'https://t.me/casperlabs' },
      { platform: 'Discord', url: 'https://discord.gg/casper' },
      { platform: 'Reddit', url: 'https://www.reddit.com/r/CasperNetwork' }
    ],
    totalFollowers: 153000
  },
  // Myle Tap social links removed as requested

  'damon': {
    companyName: 'Damon Motorcycles',
    links: [
      { platform: 'Website', url: 'https://www.damon.com' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/damonmotorcycles' },
      { platform: 'Instagram', url: 'https://www.instagram.com/damonmotorcycles' },
      { platform: 'Facebook', url: 'https://www.facebook.com/damonmotorcycles' },
      { platform: 'Twitter', url: 'https://twitter.com/damonmotorcycles' },
      { platform: 'Youtube', url: 'https://www.youtube.com/channel/UCX8u0w3VwZQk0jG5vH1V9zQ' }
    ]
  }
};