"use client";

import { motion } from "framer-motion";
import { Layers3, ArrowRight } from "lucide-react";
import Image from "next/image";

const tools = [
  {
    name: "React",
    desc: "Frontend JavaScript Library",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    desc: "Full Stack React Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
  },
  {
    name: "Node.js",
    desc: "Backend JavaScript Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    desc: "NoSQL Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    desc: "Relational Database System",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "TypeScript",
    desc: "Typed JavaScript Superset",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    desc: "Programming Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    desc: "Object-Oriented Programming Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    desc: "High-level Programming Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first CSS Framework",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s",
  },
  {
    name: "Redis",
    desc: "In-memory Key-Value Store",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Mongoose",
    desc: "MongoDB ODM for Node.js",
    icon: "https://static.beebom.com/wp-content/uploads/2024/03/60-FPS-mode-on-GTA-6-cover.jpg?w=1024",
  },
  {
    name: "Socket.io",
    desc: "Real-time Communication Library",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
  },
  {
    name: "Git",
    desc: "Version Control System",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    desc: "Code Hosting Platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Firebase",
    desc: "Backend-as-a-Service Platform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

export default function StackSection() {
  return (
    <section className="text-white pt-30 md:px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <Layers3 size={22} />
          <h2 className="text-2xl font-bold">My Stacks</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm ">
          Building with the latest tools, frameworks, and standards.{" "}
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0B] cursor-pointer border border-[#202021] rounded-xl p-4 flex items-center group justify-between hover:bg-[#141415] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex group items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <Image
                    height={500}
                    width={500}
                    src={tool.icon}
                    alt={tool.name}
                    className="w-6 group h-6"
                  />
                </div>
                <div>
                  <div className="font-medium text-white/80">{tool.name}</div>
                  <div className="text-xs text-[#999999]">{tool.desc}</div>
                </div>
              </div>

              <ArrowRight
                size={16}
                className="text-[#999999] transition-all  duration-500 group-hover:rotate-315 "
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}