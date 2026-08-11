import {
  ExperienceItem,
  Project,
  SkillCategory,
  GitHubStat,
  TopLanguage,
  Certification,
  MetricItem,
} from './types.ts';
import {
  CodeIcon,
  ServerIcon,
  ToolIcon,
  StarIcon,
  RepoIcon,
  CommitIcon,
  AIIcon,
  CloudIcon,
} from './components/Icons.tsx';

export const personalInfo = {
  name: "Pavan Kumar Budati",
  title: "Lead Full Stack Developer",
  email: "pawan1122143@gmail.com",
  phone: "+91-9154899219",
  resume: "Pavan_Kumr_Budati_Resume.pdf",
  socials: {
    github: "https://github.com/pawanbudati",
    linkedin: "https://www.linkedin.com/in/pavan-budati/",
    googleDev: "",
    leetcode: "",
    codeforces: "",
    twitter: "",
    instagram: "",
    medium: "",
  },
  handle: "pavan-budati",
};

export const metricsData: MetricItem[] = [
  { value: "4+ Yrs", label: "Full Stack Experience", description: "Across Telecom, Trading, Healthcare, & Banking" },
  { value: "2x", label: "Throughput Boost", description: "Engineered via Java 21 Virtual Threads & Async dispatches" },
  { value: "50%", label: "Page Load Speedup", description: "Achieved with Spring WebFlux & R2DBC reactive pipelines" },
  { value: "80%+", label: "Test Coverage", description: "Sustained with Copilot Spaces & JUnit test automation" },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Lead I - Software Engineer",
    company: "UST Global",
    period: "May 2026 – Present",
    location: "Hyderabad, India",
    points: [
      "Architecting and developing resilient backend microservices and responsive React JS frontends for high-throughput telecom payment processing and transaction settlement systems.",
      "Implemented robust security protocols using enterprise-grade encryption and decryption techniques (AES/RSA) to protect sensitive billing data and cardholder information in compliance with PCI-DSS standards.",
      "Engineered scalable REST APIs using Java 21 and Spring Boot, streamlining payment gateway integrations and subscription billing workflows.",
      "Containerized and deployed cloud-native microservices on AWS utilizing Helm charts for Kubernetes orchestration, simplifying multi-environment release automation.",
      "Established automated CI/CD pipelines using GitLab, enforcing rigorous code scanning, automated testing, and zero-downtime deployment strategies.",
      "Leveraged Claude AI to assist in rapid technical design prototyping, refactoring legacy payment logic, and generating comprehensive unit/integration test suites.",
    ],
    tech: ["Java 21", "Spring Boot", "React JS", "AES/RSA", "AWS", "Helm", "Kubernetes", "GitLab CI/CD", "Claude AI"],
  },
  {
    role: "Java Full Stack Developer (Consultant)",
    company: "Vitech Systems Asia",
    period: "Oct 2025 – Apr 2026",
    location: "Hyderabad, India",
    points: [
      "Designed scalable backend microservices and RESTful APIs for Vitech's core enterprise product Velocity, applying advanced system design, OOP principles, and Spring Boot with PostgreSQL.",
      "Leveraged GitHub Copilot and Copilot Spaces to auto-generate JUnit test cases, sustaining 80%+ unit test coverage across backend services.",
      "Built dynamic, reusable React JS components using Hooks and custom logic modules to accelerate UI development.",
      "Deployed and managed microservices on AWS EC2, configuring security groups, IAM roles, and Auto Scaling policies.",
      "Utilized AWS Lambda, API Gateway, S3, and RDS (PostgreSQL) for event-driven serverless workflows and secure document storage.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "React JS", "AWS EC2", "Lambda", "S3", "GitHub Copilot"],
  },
  {
    role: "Senior Java Full Stack Developer",
    company: "Endava Solutions (Formerly GalaxE Solutions)",
    period: "Jul 2022 – Oct 2025",
    location: "Bangalore, India",
    points: [
      "Led end-to-end full-stack development on GxCapture, delivering modules using Java 21, Spring Boot, Spring Security, GraphQL, and React JS.",
      "Implemented Reactive Programming (Spring Webflux, R2DBC) to handle concurrent data loads, achieving a 50% reduction in page load time.",
      "Integrated Virtual Threads (Java 21), delivering a 2x throughput improvement across critical backend workflows.",
      "Designed JWT-based authentication and authorization flows with Spring Security and RBAC for healthcare and banking APIs.",
      "Built a containerized mainframe test automation framework (Java, Docker, Socket Programming, X3270 emulator), enabling execution preview across 100% of test cases (GxQuality).",
      "Contributed to a low-code testing platform supporting Web, REST, ETL, and Mainframe using SOAP/REST APIs and Kafka.",
    ],
    tech: ["Java 21", "Spring WebFlux", "R2DBC", "Spring Security", "GraphQL", "React JS", "Virtual Threads", "Kafka", "Docker"],
  },
  {
    role: "Developer Trainee",
    company: "Exner Technologies",
    period: "Mar 2021 – Jun 2022",
    location: "Hyderabad, India",
    points: [
      "Contributed to enterprise product development using Java, Spring Framework, SQL, and JDBC.",
      "Optimized database queries and worked with relational schemas to support backend application logic.",
    ],
    tech: ["Java", "Spring Framework", "SQL", "JDBC"],
  },
];

export const educationData = {
  degree: "B.Tech in Electronics and Communication Engineering (ECE)",
  college: "Jawaharlal Nehru Technical University",
  period: "July 2018 - June 2022",
  cgpa: "7.76",
};

export const projectsData: Project[] = [
  // Neo-Copier
  {
    title: "Neo-Copier — Multi-Account Algorithmic Trade Copier & Execution Engine",
    description:
      "Architected a full-stack trade replication engine enabling sub-second order distribution from Master accounts to multiple Child accounts across Kotak Neo, Upstox, and MT5 broker APIs. Engineered asynchronous multi-account dispatching using Java 21 Virtual Threads / CompletableFuture and Python FastAPI AsyncIO, supporting dynamic lot scaling (fixed lot, ratio-based, and capital-weighted sizing). Designed an automated OCO bracket engine with real-time WebSockets and cross-platform React 19 / React Native (Expo) frontends.",
    tech: [
      "Java 21",
      "Virtual Threads",
      "FastAPI",
      "React 19",
      "TypeScript",
      "React Native (Expo)",
      "Tailwind CSS",
      "WebSockets",
      "Lightweight Charts",
    ],
    category: "Trading & Low Latency",
    imageUrl: "./images/jwt-spring-security.png",
    demoUrl: "https://pawanbudati.github.io/neo-copier",
    githubUrls: {
      frontend: "https://github.com/pawanbudati/neo-copier",
      backend: "https://github.com/pawanbudati/neo-copier-backend-java",
    },
    preview: true,
  },
  // Low Latency Forex Order Scheduler
  {
    title: "Low Latency Forex Order Scheduler",
    description:
      "Engineered a high-precision algorithmic order scheduler using React (TypeScript), Node.js, Python (FastAPI), and MetaTrader 5 (MT5) for sub-millisecond execution accuracy during high-volatility news events. Architected a 2-stage scheduling engine combining coarse sleep timers with CPU Spin-Lock (process.hrtime.bigint()), eliminating event-loop jitter (5–15ms). Designed direct IPC with active MT5 desktop instances for local zero-credential order execution.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Python (FastAPI)",
      "MetaTrader 5 (MT5)",
      "IPC",
      "CPU Spin-Lock",
    ],
    category: "Trading & Low Latency",
    imageUrl: "./images/rbc-demo.gif",
    demoUrl: "https://pawanbudati.github.io/order-schedular-xm",
    githubUrls: {
      frontend: "https://github.com/pawanbudati/order-schedular-xm",
      backend: "https://github.com/pawanbudati/order-schedular-xm-backend",
    },
    preview: true,
  },
  // Telecom Payments Encryption & Gateway Integration
  {
    title: "Telecom Payments Encryption & Gateway Integration (UST)",
    description:
      "Designed and integrated end-to-end payload encryption/decryption mechanisms (AES-256, RSA) for telecom billing services compliant with PCI-DSS standards. Containerized microservices and automated deployment pipelines with GitLab CI/CD and Helm on AWS Kubernetes clusters.",
    tech: [
      "Java 21",
      "Spring Boot",
      "AES-256",
      "RSA",
      "AWS",
      "Helm",
      "Kubernetes",
      "GitLab CI/CD",
    ],
    category: "Microservices & Security",
    imageUrl: "./images/jwt-spring-security.png",
  },
  // Reactive Microservices for High-Volume Data Optimization (GxCapture)
  {
    title: "Reactive Microservices for High-Volume Data Optimization (GxCapture)",
    description:
      "Designed reactive Spring Boot microservices using WebFlux and R2DBC with async inter-service communication via Kafka, achieving a 50% page load reduction and significantly improved backend scalability.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring WebFlux",
      "R2DBC",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "React",
    ],
    category: "Microservices & Security",
    imageUrl: "./images/spring_webflux_reactive_pipeline.svg",
  },
  // Spring Security + JWT API Platform with RBAC
  {
    title: "Spring Security + JWT API Platform with RBAC",
    description:
      "Built a reusable authentication and authorization framework with JWT, OAuth2/OIDC, and role-based access controls used across healthcare (GxCapture), logistics (USPS), and automotive (Volkswagen) client platforms.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2/OIDC",
      "RBAC",
      "REST APIs",
    ],
    category: "Microservices & Security",
    imageUrl: "./images/jwt-spring-security.png",
  },
  // MainframeDriver - Selenium-Architecture Automation Library
  {
    title: "MainframeDriver — Selenium-Architecture Automation Library for Mainframe",
    description:
      "Reverse-engineered Selenium WebDriver architecture to create MainframeDriver — a full Java automation library (Driver interface, Command Executor, RemoteWebDriver model) targeting IBM Mainframe terminals via x3270 emulator over Socket/Telnet protocol. Integrated Java 21 Virtual Threads for lightweight, high-concurrency session handling.",
    tech: [
      "Java 21",
      "Virtual Threads",
      "Socket Programming",
      "x3270 Emulator",
      "Docker",
      "Selenium Architecture",
    ],
    category: "AI & Automation",
    imageUrl: "./images/mainframe.png",
    githubUrl: "https://github.com/pawanbudati/mainframe-automate",
  },
  // RandomChat - Peer To Peer Video Chat
  {
    title: "RandomChat - Peer To Peer Video Chat",
    description:
      "A peer-to-peer video chat application built from the ground up, leveraging modern Java features. It uses WebRTC for direct browser-to-browser video streaming and Java 21's Virtual Threads for a highly scalable signaling server.",
    tech: [
      "Java 21",
      "Spring Boot",
      "WebRTC",
      "WebSockets",
      "Virtual Threads",
      "JavaScript",
    ],
    category: "AI & Automation",
    imageUrl: "./images/randomchat.png",
    demoUrl: "https://randomchat-hfta.onrender.com/",
    githubUrl: "https://github.com/pawanbudati/RandomChat",
    preview: true,
  },
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages & Fundamentals",
    skills: ["Java (8/21)", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
    icon: CodeIcon,
  },
  {
    name: "Frameworks & Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Cloud",
      "Spring WebFlux",
      "Hibernate",
      "JPA",
      "JDBC",
      "Node.js/Express",
      "FastAPI",
    ],
    icon: ServerIcon,
  },
  {
    name: "Frontend Engineering",
    skills: [
      "React JS",
      "React Native (Expo)",
      "Tailwind CSS",
      "Vite",
      "ES6+",
      "Moment.js",
      "Lightweight Charts",
      "Component Design",
    ],
    icon: CodeIcon,
  },
  {
    name: "Security & Microservices",
    skills: [
      "AES-256",
      "RSA Encryption",
      "JWT",
      "OAuth 2.0",
      "OpenID Connect (OIDC)",
      "RBAC",
      "RESTful APIs",
      "SOAP",
      "Apache Kafka",
      "WebSockets",
      "IPC",
      "API Gateway",
    ],
    icon: ToolIcon,
  },
  {
    name: "Databases & Cloud DevOps",
    skills: [
      "PostgreSQL",
      "MS SQL Server",
      "MongoDB",
      "Redis",
      "SQLite",
      "AWS (EC2, S3, Lambda, RDS, DynamoDB)",
      "Helm",
      "Kubernetes",
      "GitLab CI/CD",
      "Docker",
      "Jenkins",
    ],
    icon: CloudIcon,
  },
  {
    name: "Practices & AI Engineering",
    skills: [
      "System Design (HLD/LLD)",
      "Microservices",
      "Event-Driven Architecture",
      "OOP",
      "SOLID Principles",
      "TDD/JUnit",
      "Agile/Scrum",
      "Claude",
      "GitHub Copilot",
      "Copilot Spaces",
    ],
    icon: AIIcon,
  },
];

export const certificationsData: Certification[] = [];

export const githubStatsData: GitHubStat[] = [
  { icon: RepoIcon, value: "—", label: "Repositories" },
  { icon: CommitIcon, value: "—", label: "Commits" },
  { icon: StarIcon, value: "—", label: "Stars" },
];

export const topLanguagesData: TopLanguage[] = [
  { name: "Java", percentage: 50, color: "#E62429" },
  { name: "TypeScript", percentage: 20, color: "#007ACC" },
  { name: "JavaScript", percentage: 15, color: "#F7DF1E" },
  { name: "SQL", percentage: 10, color: "#2F855A" },
  { name: "Python", percentage: 5, color: "#306998" },
];

export const fullResumeText = `
PAVAN KUMAR BUDATI
+91-9154899219 | pawan1122143@gmail.com | LinkedIn: https://www.linkedin.com/in/pavan-budati/ | GitHub: https://github.com/pawanbudati | Portfolio: https://pawanbudati.github.io/portfolio/ | Hyderabad, India

PROFESSIONAL SUMMARY
Lead Full Stack Developer with hands-on experience in Java (8/21), Spring Boot, Microservices, and React JS, delivering scalable, secure, and high-performance enterprise applications across telecom payments, healthcare, banking, logistics, and trading execution domains. Deep expertise in OOP principles, Spring framework internals, encryption/decryption security protocols, RESTful API design, and cloud deployments using AWS, Helm, and GitLab CI/CD. Proven track record of independently delivering quality work products, optimizing transaction pipelines, and accelerating engineering productivity using modern GenAI tools (Claude, GitHub Copilot).

TECHNICAL SKILLS
System Design & Architecture: High-Level Design (HLD), Low-Level Design (LLD), Microservices Architecture, Event-Driven Architecture, Scalability & High Throughput, Distributed Systems, Caching Strategies, Fault Tolerance
Languages: Java (8/21) — Streams, Lambdas, Collections, Threads, Virtual Threads; JavaScript, TypeScript, Python, HTML, CSS
Frameworks: Spring Boot, Spring MVC, Spring Security, Spring Cloud, Spring Webflux, Hibernate, JPA, JDBC, Servlets, Node.js/Express, FastAPI
Frontend: React JS (TypeScript, Hooks, State Management, Component Design), React Native (Expo), Tailwind CSS, Vite, ES6+, Moment.js
Security & Encryption: AES-256, RSA Encryption/Decryption, Spring Security, JWT, OAuth 2.0, OpenID Connect (OIDC), RBAC
Microservices & Integration: RESTful APIs, SOAP Services, Apache Kafka, WebSockets, Inter-Process Communication (IPC), Async Messaging, API Gateway
Databases: PostgreSQL, MS SQL Server, MongoDB, Redis, SQLite, Transaction Management, Query Optimization
Cloud & DevOps: AWS (EC2, S3, Lambda, RDS, DynamoDB, API Gateway), Helm, Kubernetes, GitLab CI/CD, GitHub Actions, Docker, Jenkins
Engineering Practices: OOP, SOLID Principles, Design Patterns, TDD/JUnit, Agile/Scrum, High-Precision Scheduling
AI Tools: Claude, GitHub Copilot, GitHub Copilot Spaces

EXPERIENCE
UST Global | May 2026 – Present
Lead I - Software Engineer — Telecom & Payments Domain | Hyderabad, India
• Architecting and developing resilient backend microservices and responsive React JS frontends for high-throughput telecom payment processing and transaction settlement systems.
• Implemented robust security protocols using enterprise-grade encryption and decryption techniques (AES/RSA) to protect sensitive billing data and cardholder information in compliance with PCI-DSS standards.
• Engineered scalable REST APIs using Java 21 and Spring Boot, streamlining payment gateway integrations and subscription billing workflows.
• Containerized and deployed cloud-native microservices on AWS utilizing Helm charts for Kubernetes orchestration, simplifying multi-environment release automation.
• Established automated CI/CD pipelines using GitLab, enforcing rigorous code scanning, automated testing, and zero-downtime deployment strategies.
• Leveraged Claude AI to assist in rapid technical design prototyping, refactoring legacy payment logic, and generating comprehensive unit/integration test suites.

Vitech Systems Asia | Oct 2025 – Apr 2026
Java Full Stack Developer — Consultant | Hyderabad, India
• Designed scalable backend microservices and RESTful APIs for Vitech's core enterprise product Velocity, applying advanced system design, OOP principles, and Spring Boot with PostgreSQL.
• Leveraged GitHub Copilot and Copilot Spaces to auto-generate JUnit test cases, maintaining 80%+ unit test coverage across backend services.
• Built dynamic, reusable React JS components using Hooks and custom logic modules to accelerate UI development.
• Deployed and managed microservices on AWS EC2, configuring security groups, IAM roles, and Auto Scaling policies.
• Utilized AWS Lambda, API Gateway, S3, and RDS (PostgreSQL) for event-driven serverless workflows and secure document storage.

Endava Solutions (Formerly GalaxE Solutions) | Jul 2022 – Oct 2025
Senior Java Full Stack Developer — GxCapture — Healthcare & Banking | Bangalore, India
• Led end-to-end full-stack development on GxCapture, delivering modules using Java 21, Spring Boot, Spring Security, GraphQL, and React JS.
• Implemented Reactive Programming (Spring Webflux, R2DBC) to handle concurrent data loads, achieving a 50% reduction in page load time.
• Integrated Virtual Threads (Java 21), delivering a 2x throughput improvement across critical backend workflows.
• Designed JWT-based authentication and authorization flows with Spring Security and RBAC for healthcare and banking APIs.
Java Full Stack Developer — GxQuality — Low-Code Test Platform
• Built a containerized mainframe test automation framework (Java, Docker, Socket Programming, X3270 emulator), enabling execution preview across 100% of test cases.
• Contributed to a low-code testing platform supporting Web, REST, ETL, and Mainframe using SOAP/REST APIs and Kafka.

Exner Technologies | Mar 2021 – Jun 2022
Developer Trainee | Hyderabad, India
• Contributed to enterprise product development using Java, Spring Framework, SQL, and JDBC.

KEY PROJECTS
Neo-Copier — Multi-Account Algorithmic Trade Copier & Execution Engine
Live Demo: https://pawanbudati.github.io/neo-copier | Frontend: https://github.com/pawanbudati/neo-copier | Backend: https://github.com/pawanbudati/neo-copier-backend-java
• Architected a full-stack trade replication engine enabling sub-second order distribution from Master accounts to multiple Child accounts across Kotak Neo, Upstox, and MT5 broker APIs.
• Engineered asynchronous multi-account dispatching using Java 21 Virtual Threads / CompletableFuture and Python FastAPI AsyncIO, supporting dynamic lot scaling (fixed lot, ratio-based, and capital-weighted sizing).
• Designed an automated OCO (One-Cancels-the-Other) bracket engine with real-time order status tracking via WebSockets, automatically auto-canceling counter-leg orders to eliminate position risk.
• Implemented high-speed Scrip Master indexing, parsing 100,000+ derivative option contracts (NFO/BSE) into in-memory lookup maps for microsecond symbol-to-token resolution.
• Developed cross-platform frontends using React 19 (TypeScript, Vite, Tailwind CSS, Lightweight Charts) for real-time web monitoring and React Native (Expo) for mobile position tracking and panic square-off execution.

Low Latency Forex Order Scheduler
Live Demo: https://pawanbudati.github.io/order-schedular-xm | Frontend: https://github.com/pawanbudati/order-schedular-xm | Backend: https://github.com/pawanbudati/order-schedular-xm-backend
• Engineered a high-precision algorithmic order scheduler using React (TypeScript), Node.js, Python (FastAPI), and MetaTrader 5 (MT5) for sub-millisecond execution accuracy during high-volatility news events.
• Architected a 2-stage scheduling engine combining coarse sleep timers with a high-resolution CPU Spin-Lock (process.hrtime.bigint()), eliminating Node.js event-loop jitter (5–15ms) to achieve precise execution.
• Designed direct Inter-Process Communication (IPC) with active MT5 desktop instances, enabling local zero-credential order execution without external cloud broker API dependencies.
• Implemented real-time broker clock synchronization to calculate server time offsets and empirical execution drift (0ms -- 2ms), alongside role-based execution isolation (Admin Mode vs. Guest Sandbox).

Telecom Payments Encryption & Gateway Integration — UST
• Designed and integrated end-to-end payload encryption/decryption mechanisms for telecom billing services; automated deployment pipelines with GitLab CI/CD and Helm on AWS Kubernetes clusters.

Reactive Microservices for High-Volume Data Optimization — GxCapture
• Designed reactive Spring Boot microservices using WebFlux and R2DBC; implemented async inter-service communication via Kafka; achieved 50% page load reduction and significantly improved backend scalability.

Spring Security + JWT API Platform with RBAC — Multi-Client
• Built reusable Spring Security authentication/authorization framework with JWT, RBAC, and custom claims across healthcare (GxCapture), logistics (USPS), and automotive (Volkswagen) client platforms.

MainframeDriver — Selenium-Architecture Automation Library for Mainframe — GxQuality
GitHub: https://github.com/pawanbudati/mainframe-automate
• Reverse-engineered the Selenium WebDriver architecture and built MainframeDriver — a full Java automation library that mirrors Selenium's design patterns (Driver interface, Command Executor, RemoteWebDriver model) targeting IBM Mainframe terminals via x3270 emulator over Socket/Telnet protocol.
• Integrated Java 21 Virtual Threads for lightweight, high-concurrency session handling, enabling hundreds of parallel sessions with minimal memory overhead and 100% test case traceability.

EDUCATION
Jawaharlal Nehru Technical University | July 2018 – June 2022
B.Tech — Electronics and Communication Engineering (ECE) | CGPA: 7.76
`;

export const chatbotSystemInstruction = `You are '${personalInfo.name}'s AI Twin', Pavan's friendly and highly intelligent AI assistant for his personal portfolio. Provide concise, professional, and accurate information about Pavan based on the complete resume provided below. Keep the tone helpful, witty, confident, and professional. Always use Markdown for formatting (e.g., **Title:**, bullet lists, code blocks). Do not invent or infer information outside Pavan's resume and portfolio context.

**Special Instruction:** If a user wants to send a message, contact Pavan, or ask a question directly to him, respond with **only** the token \`[START_CONTACT_FLOW]\` and nothing else. The application will then collect the user's message.

=== FULL RESUME CONTENT ===
${fullResumeText}
===========================

When asked for contact details, provide his email (${personalInfo.email}) and LinkedIn (${personalInfo.socials.linkedin}). When asked about projects, work experience, or technical skills, answer thoroughly and accurately using the exact resume text provided above. Keep answers concise, clear, and engaging.`;


