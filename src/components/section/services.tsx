"use client";

import { ArrowRight, Figma, LayoutDashboard, Link, Puzzle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useCurrPage } from "@/lib/store";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web app development with modern tech.",
    icon: <Puzzle />,
  },
  {
    title: "Frontend Development",
    description: "Building fast, responsive user interfaces.",
    icon: <LayoutDashboard />,
  },
  {
    title: "Backend Development",
    description: "Developing secure and scalable server systems.",
    icon: <Link />,
  },
  {
    title: "UI/UX Design",
    description: "Designing clean and intuitive user experiences.",
    icon: <Figma />,
  },
];

export default function MyServices() {
    const {setPage} = useCurrPage();
  return (
    <section className="text-white pt-30 md:px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 font-medium mb-2">
          <Sparkles size={22} />
          <h2 className="text-2xl font-bold">My Services</h2>
        </div>
        <p className="text-[#999999] font-medium text-sm">
          Crafting complete web experiences that exceed expectations.
        </p>

        <div className="w-full border-b border-dashed border-[#202021] my-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#0A0A0B] group border border-[#202021] px-6 py-5 rounded-2xl flex flex-col gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#141415] border border-[#202021] px-3 py-3 rounded-lg text-xl">
                    {service.icon}
                  </div>
                  <div className="font-semibold text-white/80 text-[17px]">
                    {service.title}
                  </div>
                </div>
                <div className="text-sm text-[#999999] leading-relaxed">
                  {service.description}
                </div>
                <div className=" flex w-full rounded-lg text-sm gap-2 items-center justify-between group-hover:bg-[#141415] transition-all duration-300 p-3 cursor-pointer" 
                onClick={() => setPage('contact')}
                >
                  <p>I want this service!</p>
                  <ArrowRight size={16} className="text-[#999999] transition-all  duration-500 group-hover:rotate-315 " />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}