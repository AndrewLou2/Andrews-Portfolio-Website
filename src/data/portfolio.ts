// ===========================================
// PORTFOLIO DATA
// Centralized data for easy updates
// ===========================================

export interface Project {
  title: string;
  description: string;
  category: string;
  year: string;
  github: string | null;
  preview: string | null;
}

export interface Experience {
  title: string;
  role: string;
  period: string;
  description: string;
}

// ===========================================
// PROJECTS
// ===========================================

export const PROJECTS: Project[] = [
  {
    title: "Multisite Validation of Ventilation CNNs",
    description:
      "Developed an image processing pipeline using deep neural networks (NN) using Python and scikit-learn that provides an efficient evaluation of lung health for clinical practices",
    category: "Python, MatLab, Pandas",
    year: "2024",
    github: null,
    preview: null,
  },
  {
    title: "Meal Buddy AI",
    description:
      "Full-stack responsive mobile app that suggests home cook recipes for users using generative AI",
    category: "React Native, Python",
    year: "2024",
    github: null,
    preview:
      "https://drive.google.com/file/d/1UlBdTBSrrWe2h4-Du-r28krLFwpg_MBd/view",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A full-stack, fully-responsive personal portfolio website show-casing myself",
    category: "React JS, Bootstrap, Express, Node",
    year: "2023",
    github: "https://github.com/AndrewLou2/personal-portfolio",
    preview: "https://andrewlou.herokuapp.com/",
  },
  {
    title: "Discord Server Bot",
    description:
      "A fun interactive discord bot that provides 140+ users with a unique experience",
    category: "Python",
    year: "2023",
    github: "https://github.com/AndrewLou2/BirrBot-Discord",
    preview: null,
  },
  {
    title: "Thunder or Bust Game",
    description:
      "Managed a team of five people with the development of a 2-D RPG game",
    category: "Unity, C#",
    year: "2023",
    github: "https://github.com/JiyongSong1/SE2250_jsong386",
    preview: null,
  },
  {
    title: "Connect 4/16 Web Game",
    description: "Front-end connect-four game implementing React hooks",
    category: "React JS",
    year: "2022",
    github: "https://github.com/ShaimaaAliECE/lab2-AndrewLou2",
    preview: null,
  },
  {
    title: "OS Chat Room App",
    description:
      "Multi-user multi-transaction application implementing thread synchronization, multithreading and socket programming",
    category: "C++",
    year: "2022",
    github: "https://github.com/AndrewLou2/OS-chatroom-app",
    preview: null,
  },
];

// ===========================================
// EXPERIENCE
// ===========================================

export const EXPERIENCE: Experience[] = [
  {
    title: "YuJa",
    role: "Software Engineer",
    period: "Nov 2024 - Present",
    description:
      "Architected and implemented scalable full-stack applications using React, TypeScript, Node.js, Next.js, Express.js, and MySQL within Agile development cycles",
  },
  {
    title: "Godwise International",
    role: "Software Developer",
    period: "Sep 2023 - Nov 2024",
    description:
      "Created and enhanced an internal ERP system using JavaScript, ASP.NET, and Microsoft SQL Server (MSSQL), improving operational efficiency and data management capabilities",
  },
  {
    title: "J.D. Power",
    role: "Software Developer",
    period: "May 2022 - Sep 2023",
    description:
      "Optimized data organization and improved data I/O efficiency by 40% through MySQL query optimization across multiple data stores using Angular, Java, and Kubernetes",
  },
];
