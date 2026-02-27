"use client";

import { motion } from "framer-motion";
import { FileSearch, Package, LineChart, Folder, Gamepad2, Mail, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "LexiFind",
        description: "Legal Information Retrieval System - Currently developing an AI-powered system to streamline legal research and information access.",
        icon: <FileSearch className="w-8 h-8 text-white" />,
        tech: ["Python", "NLP", "Machine Learning", "Information Retrieval"],
        gradient: "from-purple-400 to-pink-500",
        shadowColor: "shadow-purple-500/20"
    },
    {
        title: "Retail Management",
        description: "Full-featured retail management application with database integration and intuitive UI for managing inventory and sales.",
        icon: <Package className="w-8 h-8 text-white" />,
        tech: ["C#", "MySQL", "WinForms", "Database Design"],
        gradient: "from-blue-400 to-cyan-500",
        shadowColor: "shadow-blue-500/20"
    },
    {
        title: "Recommendation System",
        description: "Python-based recommendation engine using machine learning algorithms to provide personalized suggestions.",
        icon: <LineChart className="w-8 h-8 text-white" />,
        tech: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
        gradient: "from-green-400 to-emerald-500",
        shadowColor: "shadow-green-500/20"
    },
    {
        title: "File Explorer",
        description: "Custom file explorer built with C++ implementing advanced data structures for efficient file management.",
        icon: <Folder className="w-8 h-8 text-white" />,
        tech: ["C++", "Data Structures", "OOP", "File Systems"],
        gradient: "from-orange-400 to-red-500",
        shadowColor: "shadow-orange-500/20"
    },
    {
        title: "Pacman Game",
        description: "Classic Pacman game recreated applying object-oriented programming principles and game development concepts.",
        icon: <Gamepad2 className="w-8 h-8 text-white" />,
        tech: ["C++", "OOP", "Game Development", "Graphics"],
        gradient: "from-yellow-400 to-orange-500",
        shadowColor: "shadow-yellow-500/20"
    },
    {
        title: "Mail Server",
        description: "Network mail server implementation applying OSI model rules and protocols for message transmission.",
        icon: <Mail className="w-8 h-8 text-white" />,
        tech: ["Networking", "OSI Model", "CISCO", "Protocols"],
        gradient: "from-indigo-400 to-purple-500",
        shadowColor: "shadow-indigo-500/20"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Featured <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={index}
                            className={`glow-border bg-slate-800/80 rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl ${project.shadowColor} border border-slate-700/50 backdrop-blur-sm z-10 w-full relative group`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {project.icon}
                                </div>
                                <div className="flex gap-3">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 flex-grow line-clamp-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-purple-300 border border-purple-500/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
