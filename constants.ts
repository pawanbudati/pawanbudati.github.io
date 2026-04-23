import {
  ExperienceItem,
  Project,
  SkillCategory,
  GitHubStat,
  TopLanguage,
  Certification,
} from './types.ts';
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  ToolIcon,
  StarIcon,
  RepoIcon,
  CommitIcon,
  AIIcon,
  CloudIcon,
} from './components/Icons.tsx';

export const personalInfo = {
  name: "Pavan Kumr Budati",
  title: "Java Full Stack Developer",
  email: "pawan1122143@gmail.com",
  phone: "+91-91548 99219",
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

export const experienceData: ExperienceItem[] = [
  {
    role: "Java Full Stack Developer (Consultant)",
    company: "VItech Systems Asia",
    period: "Oct 2025 - Present",
    location: "Hyderabad, India",
    points: [
      "Design scalable, secure backend microservices and RESTful APIs for the Velocity enterprise platform using Spring Boot and PostgreSQL.",
      "Integrated GitHub Copilot into the review workflow for AI-assisted code and PR suggestions, reducing review turnaround time.",
      "Auto-generated and maintained JUnit test suites with Copilot/Copilot Spaces to sustain 80%+ unit test coverage.",
      "Use Copilot Spaces for context-aware, codebase-wide assistance to accelerate feature delivery without sacrificing standards.",
      "Collaborate directly with stakeholders to clarify requirements, remove ambiguity, and deliver high-quality releases on time.",
    ],
  },
  {
    role: "Freelance Java Full Stack Developer",
    company: "USPS (Logistics) & Volkswagen (Automotive)",
    period: "Oct 2025 - Present",
    location: "Remote",
    points: [
      "Delivered Spring Boot microservices and REST APIs for a USPS logistics platform with JWT-secured inter-service communication.",
      "Built CMS-focused microservices for Volkswagen with RBAC, JPA/Hibernate data access, and optimized transaction management.",
      "Maintained reliable async communication patterns across distributed services using Kafka/JMS and API gateway patterns.",
    ],
  },
  {
    role: "Senior Java Full Stack Developer",
    company: "Endava Solutions (formerly GalaxE Solutions)",
    period: "Jul 2022 - Oct 2025",
    location: "Bangalore, India",
    points: [
      "Led end-to-end development on GxCapture using Java 21, Spring Boot/Security, Hibernate/JPA, and React JS.",
      "Implemented reactive pipelines with Spring WebFlux and R2DBC to handle high-volume loads, cutting page load time by 50%.",
      "Designed JWT-based authentication/authorization with RBAC and custom claims across healthcare and banking REST APIs.",
      "Built React scheduling modules (React-Big-Calendar, Moment.js) that reduced manual scheduling effort by 40%.",
      "Applied Java 21 Virtual Threads to double throughput on critical backend workflows and improve scalability.",
      "Created a containerized mainframe test automation framework (Java, Docker, Socket/x3270) with real-time previews and compliance recording.",
      "Contributed SOAP/REST integrations and Kafka-based async communication patterns for a low-code test platform.",
    ],
  },
  {
    role: "Developer Trainee",
    company: "EXNER Technologies",
    period: "Apr 2021 - Jun 2022",
    location: "Bangalore, India",
    points: [
      "Contributed to feature development and bug fixes on existing enterprise products using Java and the Spring Framework, gaining hands-on experience in server-side application development.",
      "Developed and optimized SQL queries for data retrieval, manipulation, and reporting; worked with relational databases to support backend business logic and application data layers.",
      "Collaborated closely with senior developers to understand product architecture, implement assigned modules, and adhere to established coding standards and best practices.",
      "Gained foundational expertise in OOP principles, Spring MVC, and JDBC, building a strong base for enterprise Java development that supported rapid growth into full-stack engineering roles."
    ],
  },
];

export const educationData = {
  degree: "B.Tech in Electronics and Communication Engineering (ECE)",
  college: "Jawaharlal Nehru Technical University",
  period: "July 2018 - June 2022",
  cgpa: "7.76",
};

export const projectsData: Project[] = [
  //CarbonScope - Emissions Analytics Dashboard
  /*
  {
    title: "CarbonScope - Emissions Analytics Dashboard",
    description:
      "An end-to-end emissions analytics platform with Chart.js visualizations, Gemini-powered data analysis and web insights, deployed on Google Cloud Run for scalability.",
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "Chart.js",
      "Google Cloud Run",
      "Gemini API",
      "Docker",
    ],
    imageUrl: "./images/carbon-scope.png",
    demoUrl: "https://thughari.github.io/carbon-scope/",
    githubUrls: {
      frontend: "https://github.com/thughari/carbon-scope",
      backend: "https://github.com/thughari/carbonscope",
    },
  },
  */
  //RandomChat - Peer To Peer Video Chat
  {
    title: "RandomChat - Peer To Peer Video Chat",
    description:
      "A peer-to-peer video chat application built from the ground up, leveraging modern Java features. It uses WebRTC for direct browser-to-browser video streaming and Java 21's Virtual Threads for a highly scalable signaling server.",
    tech: ["Java 21", "Spring Boot", "WebRTC", "WebSockets", "Virtual Threads", "JavaScript"],
    imageUrl: "./images/randomchat.png",
    demoUrl: "https://randomchat-hfta.onrender.com/",
    githubUrl: "https://github.com/pawanbudati/RandomChat",
    preview: true
  },
  /*
  //CollabEditor - Online Editor like Google Docs
  {
    title: "CollabEditor - Online Editor like Google Docs",
    description:
      "An online collaborative text editor that allows multiple users to edit a document simultaneously. Built with a Spring Boot backend using WebSockets for instant synchronization of changes across all clients.",
    tech: ["Java", "Spring Boot", "WebSockets", "Maven", "TypeScript", "Angular"],
    imageUrl: "./images/collabeditor.png",
    demoUrl: "https://pawanbudati.github.io/Collaborative-Editor-UI/editor/hari",
    githubUrl: "https://github.com/thughari/CollabEditor",
    githubUrls: {
      frontend: "https://github.com/thughari/Collaborative-Editor-UI",
      backend: "https://github.com/thughari/CollabEditor",
    },
  },
  */
  //National Scholarship Portal
  {
    title: "National Scholarship Portal",
    description:
      "A comprehensive scholarship management system with multi-role access for students, institutes, and administrators. The backend is containerized with Docker for easy deployment and scalability.",
    tech: ["Java", "Spring Boot", "Angular", "MongoDB", "Docker", "REST APIs"],
    imageUrl: "./images/nsp.png",
    /*
    demoUrl: "https://pawanbudati.github.io/NationalScholarshipPortal-FrontEnd/#/",
    githubUrl: "https://github.com/thughari/NationalScholarshipPortal-FrontEnd",
    githubUrls: {
      frontend: "https://github.com/thughari/NationalScholarshipPortal-FrontEnd",
      backend: "https://github.com/thughari/National_Scholarship_Portal_Backend",
    },
    */
  },
  //Music Player Web App
  {
    title: "Music Player Web App",
    description:
      "A sleek and responsive music player web application that allows users to play, pause, and skip tracks. Built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: "./images/image.png",
    /**
     *     demoUrl: "https://pawanbudati.github.io/music-player/",
        githubUrl: "https://github.com/thughari/music-player",
    */
  },
  //Reactive Microservices for High-Volume Data Optimization (GxCapture)
  {
    title: "Reactive Microservices for High-Volume Data Optimization (GxCapture)",
    description:
      "Designed reactive Spring Boot microservices using WebFlux and R2DBC with async messaging to handle high-volume loads, delivering a 50% reduction in page load times and improved backend scalability.",
    tech: ["Java 21", "Spring Boot", "Spring WebFlux", "R2DBC", "PostgreSQL", "Kafka", "Docker", "React"],
    imageUrl: "./images/spring_webflux_reactive_pipeline.svg",
  },
  //Spring Security + JWT API Platform with RBAC
  {
    title: "Spring Security + JWT API Platform with RBAC",
    description:
      "Built a reusable authentication and authorization framework with JWT, OAuth2/OIDC, and role-based access controls used across healthcare, logistics, and automotive client platforms.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "OAuth2/OIDC", "RBAC", "REST APIs"],
    imageUrl: "./images/jwt-spring-security.png",
  },
  //MainframeDriver - Selenium-Style Automation for Mainframe
  {
    title: "MainframeDriver - Selenium-Style Automation for Mainframe",
    description:
      "Engineered a Selenium-inspired automation library for IBM mainframes using socket-based x3270 integration, virtual threads, and Dockerized execution with real-time screen capture and compliance recording.",
    tech: ["Java", "Virtual Threads", "Socket Programming", "x3270", "Docker", "JUnit"],
    imageUrl: "./images/mainframe.png",
    githubUrl: "https://github.com/pawanbudati/mainframe-automate",
  },
  //Calendar & Wave Slotting Engine (GxCapture)
  {
    title: "Calendar & Wave Slotting Engine (GxCapture)",
    description:
      "Delivered an interactive scheduling engine with React Big Calendar and Spring Boot APIs for slot conflict detection, wave management, and capacity planning, reducing manual scheduling effort by 40%.",
    tech: ["React", "React-Big-Calendar", "Moment.js", "Spring Boot", "REST APIs", "PostgreSQL"],
    imageUrl: "./images/rbc-demo.gif",
  },
];

export const skillsData: SkillCategory[] = [
  {
    name: "Languages & Frontend",
    skills: ["Java (8/21)", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "React"],
    icon: CodeIcon,
  },
  {
    name: "Backend & Microservices",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Cloud",
      "Spring WebFlux",
      "REST & SOAP APIs",
      "Apache Kafka",
      "JMS",
      "API Gateway",
    ],
    icon: ServerIcon,
  },
  {
    name: "Databases & ORM",
    skills: ["PostgreSQL", "MS SQL Server", "MongoDB", "Redis", "Hibernate", "JPA", "Query Optimization", "Transactions"],
    icon: DatabaseIcon,
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, DynamoDB, ELB)", "Docker", "Jenkins", "GitHub Actions", "Nginx", "Maven", "Gradle"],
    icon: CloudIcon,
  },
  {
    name: "Security & Auth",
    skills: ["JWT", "OAuth2/OIDC", "RBAC", "Spring Cloud Security", "OpenID Connect"],
    icon: ToolIcon,
  },
  {
    name: "Practices & AI Tools",
    skills: ["OOP", "SOLID", "Design Patterns", "TDD/JUnit", "Agile/Scrum", "Code Reviews", "GitHub Copilot", "Copilot Spaces"],
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

export const chatbotSystemInstruction = `You are '${personalInfo.name}'s AI Twin', his friendly AI assistant for his personal portfolio. Provide concise and accurate information about Pavan based *only* on the context provided below. Keep the tone helpful, a little witty, and professional. Always use Markdown for formatting (e.g., **Title:**, bullet lists). Do not invent or infer any information.

**Special Instruction:** If a user wants to send a message, contact Pavan, or ask a question directly to him, respond with **only** the token \`[START_CONTACT_FLOW]\` and nothing else. The application will then collect the user's message.

Here is the information about ${personalInfo.name}:
- **Name:** ${personalInfo.name}
- **Title:** ${personalInfo.title}
- **Location:** Hyderabad, India
- **Contact:** Email (${personalInfo.email}), Phone (${personalInfo.phone})
- **Socials:** GitHub (${personalInfo.socials.github}), LinkedIn (${personalInfo.socials.linkedin}), Handle ('${personalInfo.handle}')

**Experience Highlights:**
- ${experienceData[0].role} at ${experienceData[0].company} (${experienceData[0].period})
- ${experienceData[1].role} at ${experienceData[1].company} (${experienceData[1].period})
- ${experienceData[2].role} at ${experienceData[2].company} (${experienceData[2].period})

**Projects (selected):**
* ${projectsData[0].title}: ${projectsData[0].description} Tech: ${projectsData[0].tech.join(', ')}.
* ${projectsData[1].title}: ${projectsData[1].description} Tech: ${projectsData[1].tech.join(', ')}.
* ${projectsData[2].title}: ${projectsData[2].description} Tech: ${projectsData[2].tech.join(', ')}.
* ${projectsData[3].title}: ${projectsData[3].description} Tech: ${projectsData[3].tech.join(', ')}.
* ${projectsData[4].title}: ${projectsData[4].description} Tech: ${projectsData[4].tech.join(', ')}.


**Skills:**
${skillsData.map(category => `* **${category.name}:** ${category.skills.join(', ')}`).join('\\n')}

**Education:**
- **Degree:** ${educationData.degree} from ${educationData.college} (${educationData.period}) CGPA: ${educationData.cgpa}

When asked for contact details, provide his email and LinkedIn. When asked about projects, briefly describe them and mention the key technologies. Keep answers brief and to the point.`;
