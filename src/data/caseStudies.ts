import { CaseStudyData } from '@/types/caseStudy';

// Import individual case studies
import damonMotorcycles from './case-studies/damon-motorcycles';
import bellabeat from './case-studies/bellabeat';
import trillerfest from './case-studies/trillerfest';
import unikoinGold from './case-studies/unikoin-gold';
import coverBuild from './case-studies/cover-build';
import casperBlockchain from './case-studies/casper-blockchain';
import myleTap from './case-studies/myle-tap';
import keekSocial from './case-studies/keek-social';
import luxNetwork from './case-studies/lux-network';
import zooFoundation from './case-studies/zoo-foundation';

// Combine all case studies into a single record with ID as the key
const caseStudies: Record<string, CaseStudyData> = {
  'damon-motorcycles': damonMotorcycles,
  'bellabeat': bellabeat,
  'trillerfest': trillerfest,
  'unikoin-gold': unikoinGold,
  'cover-build': coverBuild,
  'casper-blockchain': casperBlockchain,
  'myle-tap': myleTap,
  'keek-social': keekSocial,
  'lux-network': luxNetwork,
  'zoo-foundation': zooFoundation
};

export default caseStudies;
