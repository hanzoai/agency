import { CaseStudyData } from '@/types/caseStudy';

const zooFoundation: CaseStudyData = {
  id: "zoo-foundation",
  title: "ZOO LABS FOUNDATION",
  subtitle: "DECENTRALIZED AI RESEARCH NETWORK",
  client: "Zoo Labs Foundation",
  services: [
    "AI Infrastructure",
    "Protocol Design",
    "Decentralized Training",
    "Governance Architecture"
  ],
  results: [
    "501(c)(3) nonprofit research foundation established",
    "ZIPs governance system live at zips.zoo.ngo",
    "DSO protocol: model adaptation at $18 vs $15K+ fine-tuning",
    "PoAI consensus for verifiable AI compute",
    "Open research network with community-driven governance"
  ],
  overview: [
    "Zoo Labs Foundation is a 501(c)(3) nonprofit dedicated to decentralized AI research and decentralized science (DeSci). Hanzo designed and built the complete technical infrastructure — from the training platform to the governance system — creating an open research network where AI development is community-driven rather than corporate-controlled.",
    "The foundation operates at the intersection of frontier AI and decentralization: the Gym training platform for distributed model development, the ZIPs governance system for community proposals, the DSO protocol for zero-compute model adaptation, and the PoAI consensus mechanism for verifiable AI inference."
  ],
  challenge: [
    "AI development is concentrated in a handful of corporations with the capital for massive GPU clusters. Researchers outside these organizations cannot meaningfully contribute to frontier model development. Zoo needed infrastructure that would enable decentralized participation in AI research without requiring corporate-scale resources.",
    "Governance of open AI research is inherently political — who decides what gets built, what safety constraints apply, and how resources are allocated. Zoo needed a governance framework that was transparent, participatory, and resistant to capture by any single faction."
  ],
  solution: [
    "We built the Gym — a distributed training platform that coordinates model development across heterogeneous hardware. Contributors can participate in training runs from consumer GPUs to datacenter clusters. The DSO (Decentralized Semantic Optimization) protocol enables model behavioral adaptation through experience injection without full retraining — reducing adaptation costs from $15,000+ to $18.",
    "The ZIPs (Zoo Improvement Proposals) governance system at zips.zoo.ngo provides transparent, community-driven decision-making. Research priorities, resource allocation, and protocol changes all flow through the ZIPs process. The PoAI (Proof of AI) consensus mechanism makes AI computation verifiable through deterministic quantization schemes, enabling threshold-based consensus over model outputs."
  ],
  testimonial: {
    quote: "Zoo proves that frontier AI research does not require a billion-dollar budget. With the right infrastructure and governance, an open community can push the boundaries of AI while keeping development transparent and accountable. Hanzo built that infrastructure from scratch.",
    author: "Zach Kelling",
    role: "Co-founder, Zoo Labs Foundation"
  },
  images: [
    "/images/graphics/ai-nodes.svg",
    "/images/graphics/data-wave.svg",
    "/images/graphics/code-blocks.svg"
  ],
  relatedProjects: [
    {
      id: "lux-network",
      title: "LUX NETWORK",
      subtitle: "POST-QUANTUM BLOCKCHAIN",
      imageUrl: "/images/graphics/data-wave.svg",
      route: "/case-study/lux-network"
    },
    {
      id: "keek-social",
      title: "KEEK",
      subtitle: "AI-POWERED SOCIAL MEDIA",
      imageUrl: "/images/graphics/ai-nodes.svg",
      route: "/case-study/keek-social"
    }
  ]
};

export default zooFoundation;
