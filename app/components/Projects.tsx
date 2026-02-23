"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "LexiFind",
        subtitle: "Legal Information Retrieval System",
        status: "Current Project",
        category: "AI / NLP",
        color: "bg-blue-50"
    },
    {
        title: "PMS Prediction System",
        subtitle: "Machine Learning Models",
        category: "Machine Learning",
        color: "bg-purple-50"
    },
    {
        title: "Recommendation System",
        subtitle: "Python-based analytics",
        category: "Data Science",
        color: "bg-orange-50"
    },
    {
        title: "Temperature & Rainfall Pattern",
        subtitle: "Review Paper Analysis",
        category: "Research",
        color: "bg-green-50"
    },
    {
        title: "Retail Management System",
        subtitle: "MySQL + C# WinForms",
        category: "Desktop App",
        color: "bg-indigo-50"
    },
    {
        title: "Shoe Retail Management System",
        subtitle: "ETL Pipeline Integration",
        category: "Data Engineering",
        color: "bg-rose-50"
    },
    {
        title: "File Explorer",
        subtitle: "C++ Data Structures",
        category: "Algorithms",
        color: "bg-amber-50"
    },
    {
        title: "Mail Server",
        subtitle: "OSI Model & Networking Concepts",
        category: "Networking",
        color: "bg-sky-50"
    },
    {
        title: "Pacman",
        subtitle: "Object-Oriented Programming Concepts",
        category: "Game Dev",
        color: "bg-red-50"
    },
    {
        title: "Tic-Tac-Toe Game",
        subtitle: "Console-Based Interactive Game",
        category: "Console",
        color: "bg-gray-50"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-4"
                        >
                            Selected Works.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl text-[#86868b] max-w-lg"
                        >
                            A showcase of academic research, intelligent systems, and structured algorithms.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            key={index}
                            className={`apple-card flex flex-col h-[400px] overflow-hidden group cursor-pointer border border-[rgba(0,0,0,0.02)]`}
                        >
                            <div className={`flex-1 ${project.color} flex items-center justify-center relative overflow-hidden transition-colors duration-500`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="material-symbols-outlined text-8xl text-black/5 group-hover:scale-110 transition-transform duration-700 ease-out">
                                    all_match
                                </span>

                                {project.status && (
                                    <div className="absolute top-6 right-6">
                                        <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest border border-black/5 text-[#1d1d1f]">
                                            {project.status}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 md:p-10 bg-white z-10">
                                <p className="text-xs font-bold text-[#86868b] uppercase tracking-widest mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[#86868b] font-medium leading-relaxed">
                                    {project.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
