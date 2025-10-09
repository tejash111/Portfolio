import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MediumIcon,
  TelegramIcon,
  InstagramIcon,
} from "@/components/icons";
import { title } from "process";

export const RESUME_DATA = {
  name: "Tejash Rajput",
  initials: "TR",
  location: "Based in India IN",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about: "I build AI and Full Stack stuff",
  summary:
    "I build full-stack applications, contribute to open-source, and mentor developers. Experienced in modern web frameworks like Next.js, React, Express, MongoDB, and PostgreSQL. Currently mentoring contributors at GSSOC’25 and developing scalable products with cloud-native & AI integrations.",
  avatarUrl: "avatar.jpg",
  personalWebsiteUrl: "https://tejashrajput.vercel.app/",
  contact: {
    email: "tejashsinghrajput@gmail.com",

    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tejashrajput/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/tejashrajput11",
        icon: XIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/tejash111",
        icon: GitHubIcon,
      },
      {
        name : "Instagram",
        url : "https://www.instagram.com/tejashrajput_",
        icon : InstagramIcon
      }
    ],
  },
  education: [
    {
      school: "Kiet Group of institutions",
      degree: "Bachelors Degree in Computer Science",
      start: "2024",
      end: "2028",
    },
  ],
  achievements: [
    {
      title: "Recognized by Binance for Community Impact",
      reference: [
        {
          name: "👉 Reference",
          url: "https://x.com/binance/status/1714321768368967735",
        },
      ],
    },
      ],

  work: [
     {
      company: "Stealth Startup",
      link: "#",
      badges: ["Remote", "Frontend"],
      title: "Founding Frontend developer",
      start: "2025 September",
      end: "Present",
      bulletPoints: [
        {
  text: "Developing responsive and interactive frontend applications using React, Framer Motion, LangChain, and Langgraph.",
},
{
  text: "Collaborated with backend developers working in Django to deliver end-to-end solutions, focusing on seamless integration and user experience.",
},

          ],
    },
          {
      company: "Tensorik",
      link: "#",
      badges: ["Remote", "Full stack"],
      title: "Full stack developer",
      start: "2025 August",
      end: "2025 October",
      bulletPoints: [
      {
  text: "Built dynamic and responsive web applications using React for the frontend and node.js for the backend.",
},
{
  text: "Integrated Razorpay payment gateway to enable secure and seamless online transactions within the platform.",
},
          ],
    },
    {
      company: "FOSSCU",
      link: "https://fosscu.org/",
      badges: ["Remote", "Full-Time"],
      title: "Full Stack developer",
      start: "2024 September",
      end: "Present",
      bulletPoints: [
        {
          text: "Developed full-stack apps using JavaScript, TypeScript ,Next.js ,React, Express ,MongoDb and Postgresql.",
        },
        {
          text: "Collaborated with clients and teams to deliver 4+ full-stack freelance projects, overseeing end-to-end development and deployment.",
        },
          ],
    },
    {
      company: "GSSOC",
      link: "https://fosscu.org/",
      badges: ["Remote", "Part-Time"],
      title: "Full Stack developer",
      start: "2025 July",
      end: "Present",
      bulletPoints: [
        {
          text: "Mentor at GirlScript Summer of Code 2025 – Led contributors in implementing scalable features, optimizing codebases, and resolving real-world GitHub issues",
        },
        {
          text: "Conducted technical reviews, enforced best practices in Git/GitHub workflows, and guided contributors on full-stack development using modern tech stacks.",
        },
          ],
    },
  ],

  skills: [
    "HTML/CSS/Javascript",
    "TypeScript",
    "React/Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Node.js",
    "Python",
    "Docker",
    "Docker Compose",
    "CI/CD Actions",
    "REST API",
    "GraphQL",
    "Full Stack Development",
    "AI Development",
    "Cloudinary",
    "Better-Auth"
  ],
  projects: [
    {
      title: "Rental App",
      techStack: ["Next.js","Node.js","typescript","Postgres","drizzle-orm","cloudinary","Better-auth","Paypal",],
      description:
        "A rental app where someone",
        image : "/rent.png",
      link: {
        label: "github.com",
        href: "https://github.com/tejash111/rentalapp/",
      },
      github : "https://github.com/tejash111/rentalapp/",
      live : "https://nok-nok-phi.vercel.app/"
    },
    {
      title: "AI Resume Builder",
      techStack: ["React.js", "Node.js", "TypeScript","MongoDB","Langchain"],
      description:
        "Ai based resume Builder",
        image : "/res.png",
      link: {
        label: "github.com",
        href: "https://github.com/tejash111/Resume-builder",
      },
      github : "https://github.com/tejash111/Resume-builder/",
      live : "https://pitchperfect-weld.vercel.app/"
    },
    {
      title: "Lost and found",
      techStack: ["Next.js","Node.js","typescript","Postgres","drizzle-orm","cloudinary","Better-auth"],
      description:
        "jsut a lost and fonnd app",
        image : "/found.png",
      link: {
        label: "github.com",
        href: "https://github.com/tejash111/lost-found",
      },
      github : "https://github.com/tejash111/lost-found/",
      live : "https://404-found-seven.vercel.app/landing-page"
    },
    {
      title: "Task Mangement app",
      techStack: ["React.js", "Node.js", "Javascript","MongoDB","Tailwind","JWT"],
      description:
        "A Task Mangemnt system like trello ",
        image : "/task.png",
      link: {
        label: "github.com",
        href: "https://github.com/tejash111/ShipIt",
      },
       github : "https://github.com/tejash111/ShipIt/",
      live : "https://ship-it-one.vercel.app/"
    },
    
  ],
  keyHighlights: [
    {
      title: "Experience",
      description: "2+ years in tech industry",
      icon: "💼",
    },
    {
      title: "Projects",
      description: "10+ projects completed",
      icon: "🚀",
    },
    {
      title: "Open Source",
      description: "10+ contributions",
      icon: "✨",
    },
    {
      title: "Hackathons",
      description: "Attended 5+ hackathons",
      icon: "🏆",
    },
    {
      title: "Freelance",
      description: "4+ projects Shipped",
      icon: "🔥",
    },
    {
      title: "Languages",
      description: "English (Professional), Hindi (Native)",
      icon: "🗣️",
    },
    {
      title: "Hobbies",
      description: "Reading, Writing, Coding, Traveling",
      icon: "🎓",
    },
    {
      title: "Status",
      description: "Single",
      icon: "💑",
    },
  ],
} as const;
