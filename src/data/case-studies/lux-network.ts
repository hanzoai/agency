import { CaseStudyData } from '@/types/caseStudy';

const luxNetwork: CaseStudyData = {
  id: "lux-network",
  title: "LUX NETWORK",
  subtitle: "POST-QUANTUM BLOCKCHAIN — SUB-SECOND FINALITY",
  client: "Lux Partners",
  services: [
    "Blockchain Architecture",
    "Consensus Engineering",
    "Post-Quantum Cryptography",
    "Infrastructure Operations"
  ],
  results: [
    "Sub-second finality with 4,500+ TPS throughput",
    "First blockchain with CRYSTALS-Dilithium from genesis",
    "15 validator mainnet running on production Kubernetes",
    "Multi-VM architecture (X-Chain, P-Chain, C-Chain)",
    "Full EVM compatibility with custom precompiles"
  ],
  overview: [
    "Lux Network is a multi-consensus blockchain built from the ground up with post-quantum cryptography. Hanzo designed and implemented the core protocol — from the Quasar consensus engine to the validator infrastructure — delivering a blockchain that achieves sub-second finality while being quantum-resistant from day one.",
    "The project spans the full stack: Go-based node implementation, Snow consensus family with deterministic finality guarantees, CRYSTALS-Dilithium signature scheme, EVM-compatible execution layer, cross-chain bridge protocol, and production Kubernetes infrastructure running 15 validators."
  ],
  challenge: [
    "Existing blockchains face an existential threat from quantum computing. Retrofitting post-quantum cryptography onto an existing chain creates compatibility breaks, performance regressions, and migration complexity. Lux needed to be quantum-safe from genesis — not as an upgrade path.",
    "Consensus performance was non-negotiable: sub-second finality for real-world transaction processing while maintaining Byzantine fault tolerance. The system needed to handle 4,500+ TPS without sacrificing decentralization or security guarantees."
  ],
  solution: [
    "We designed the Quasar consensus family — building on Snow protocol research but introducing threshold-based commitment rounds that provide deterministic finality guarantees within bounded time. Every validator key uses CRYSTALS-Dilithium as a genesis requirement. Batched signature verification optimizations brought per-transaction overhead below 0.3ms.",
    "The multi-VM architecture allows purpose-built virtual machines to coexist: AVM for asset operations, PlatformVM for validator coordination, and CoreVM for EVM-compatible smart contracts. Cross-chain messaging uses the Warp V2 protocol with Teleport for reliable delivery. Production infrastructure runs on DOKS Kubernetes with automated validator management."
  ],
  testimonial: {
    quote: "Hanzo built a blockchain that will still be secure when quantum computers arrive. The engineering depth in consensus, cryptography, and infrastructure operations is world-class. Sub-second finality with post-quantum security — no other chain has both.",
    author: "Zach Kelling",
    role: "Co-founder, Lux Partners"
  },
  images: [
    "/images/graphics/ai-nodes.svg",
    "/images/graphics/data-wave.svg",
    "/images/graphics/code-blocks.svg"
  ],
  relatedProjects: [
    {
      id: "casper-blockchain",
      title: "CASPER BLOCKCHAIN",
      subtitle: "ENTERPRISE BLOCKCHAIN LAUNCH",
      imageUrl: "/images/casper/cover.jpg",
      route: "/case-study/casper-blockchain"
    },
    {
      id: "zoo-foundation",
      title: "ZOO LABS FOUNDATION",
      subtitle: "DECENTRALIZED AI RESEARCH NETWORK",
      imageUrl: "/images/graphics/ai-nodes.svg",
      route: "/case-study/zoo-foundation"
    }
  ]
};

export default luxNetwork;
