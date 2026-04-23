export const PROJECTS = [
  {
    id: "mail-scraper",
    title: "Mail Scraper SaaS",
    tagline: "Automated email scraping + outreach platform",
    description: "A production-ready SaaS for intelligent lead discovery and outbound management. Built with a background scraping engine and native Gmail integration.",
    features: ["Lead discovery", "Gmail integration", "AI reply generation"],
    tech: ["Next.js", "Node.js", "Redis", "BullMQ", "Prisma"],
    tag: "SaaS / AI / Automation",
    github: "#",
    demo: "#",
    systemDesign: {
      architecture: "Queue-based Microservices",
      diagram: "Scraper -> Redis -> BullMQ Worker -> Gmail API",
    }
  },
  {
    id: "flowstate-pro",
    title: "FlowState Pro",
    tagline: "Enterprise task management SaaS",
    description: "Scalable enterprise task management system featuring Google OAuth, Razorpay integration, and Twilio MFA.",
    features: ["Google OAuth", "Razorpay subscriptions", "Twilio MFA", "Kubernetes"],
    tech: ["React", "Node.js", "Kubernetes", "Docker", "Razorpay"],
    tag: "Enterprise SaaS / Scalable Systems",
    github: "#",
    demo: "#",
    systemDesign: {
      architecture: "Microservices with K8s",
      diagram: "Auth Service -> Task Service -> Notification Service (Twilio)",
    }
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat App",
    tagline: "High-performance messaging platform",
    description: "Built for scale using Socket.io and containerized with Docker and Kubernetes.",
    features: ["Instant messaging", "Dockerized", "K8s Deployment"],
    tech: ["React", "Node.js", "Socket.io", "Docker", "Kubernetes"],
    tag: "Real-time Systems",
    github: "#",
    demo: "#",
  },
  {
    id: "microservices-app",
    title: "Microservices App",
    tagline: "Distributed architecture template",
    description: "Fully containerized architecture featuring API gateway and distributed authentication.",
    features: ["API Gateway", "Auth Service", "Containerized"],
    tech: ["Docker", "Kubernetes", "gRPC", "Node.js"],
    tag: "Distributed Systems",
    github: "#",
    demo: "#",
  },
  {
    id: "auth-system",
    title: "Auth System Backend",
    tagline: "Secure backend infrastructure",
    description: "Robust authentication system using Node.js, Express, and Redis for session management.",
    features: ["JWT", "Redis Caching", "Docker Compose"],
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    tag: "Backend Infrastructure",
    github: "#",
    demo: "#",
  },
  {
    id: "payment-system",
    title: "Advanced Payment System",
    tagline: "Secure FinTech integration",
    description: "Enterprise-grade Razorpay integration with secure signature verification.",
    features: ["Razorpay", "Signature Verification", "Webhooks"],
    tech: ["Node.js", "Razorpay", "Express"],
    tag: "FinTech",
    github: "#",
    demo: "#",
  },
  {
    id: "scraper-dashboard",
    title: "Email Scraper Dashboard",
    tagline: "Full-stack data analytics",
    description: "Interactive dashboard with CSV export and real-time filtering.",
    features: ["Data Filtering", "CSV Export", "Analytics"],
    tech: ["Node.js", "MongoDB", "React"],
    tag: "Data Tools",
    github: "#",
    demo: "#",
  }
];

export const SKILLS = {
  languages: ["Python", "C++", "JavaScript", "SQL"],
  frontend: ["React", "Next.js", "Tailwind", "Framer Motion"],
  backend: ["Node.js", "Express", "Python (FastAPI)", "Go (Learning)"],
  systems: ["Docker", "Kubernetes", "Microservices", "System Design"],
  cloud: ["AWS", "Azure", "Oracle Cloud"],
  databases: ["MongoDB", "MySQL", "Redis", "PostgreSQL"],
  domains: ["Cybersecurity", "AI / GenAI", "IoT", "FinTech"]
};

export const CERTIFICATIONS = [
  { name: "AWS Cloud Architecting", issuer: "AWS" },
  { name: "Azure Data Fundamentals", issuer: "Microsoft" },
  { name: "IBM Watsonx GenAI", issuer: "IBM" },
  { name: "Oracle Data Platform", issuer: "Oracle" },
  { name: "IBM Cybersecurity", issuer: "IBM" }
];

export const EXPERIENCE = [
  {
    role: "Event Operations",
    company: "Hult Prize",
    description: "Led logistics and operations for startup competitions."
  },
  {
    role: "Design + Tech Collaborator",
    company: "Innovators Quest",
    description: "Collaborated on multi-disciplinary tech projects."
  }
];
