"use client";

import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Operations & AI Strategy Lead",
            company: "Neuroscout",
            period: "2026 - Present",
            type: "Startup",
            description: (
                <ul className="list-disc leading-relaxed pl-4 space-y-1">
                    <li>Leading operational strategy for a Web3 Agentic AI startup focused on autonomous AI systems.</li>
                    <li>Overseeing cross-functional coordination between AI engineering, product, and growth teams.</li>
                    <li>Designing and optimizing internal workflows to improve execution speed and scalability.</li>
                    <li>Supporting development and deployment of AI agents integrated with APIs, tools, and decentralized systems.</li>
                    <li>Managing partnerships, product operations, and ecosystem collaborations in Web3 space.</li>
                    <li>Driving execution from strategy to implementation and measurable outcomes.</li>
                </ul>
            ),
            icon: <Users className="w-6 h-6 text-white" />,
            skills: ["AI Operations", "Web3", "Strategy", "Execution"]
        },
        {
            title: "Junior AI Engineer",
            company: "Orbix Labs",
            period: "2024 - Present",
            type: "Remote",
            description: (
                <ul className="list-disc leading-relaxed pl-4 space-y-1">
                    <li>Assisting in the development and testing of AI and machine learning models.</li>
                    <li>Working with datasets for preprocessing, training, and evaluation.</li>
                    <li>Supporting AI-based solutions using Python and ML frameworks.</li>
                    <li>Collaborating with senior engineers on real-world AI projects.</li>
                </ul>
            ),
            icon: <BookOpen className="w-6 h-6 text-white" />,
            skills: ["Python", "Machine Learning", "Data Preprocessing", "AI Models"]
        },
        {
            title: "Data Engineering Intern",
            company: "Xflow Research",
            period: "2025",
            type: "On-Site",
            description: (
                <ul className="list-disc leading-relaxed pl-4 space-y-1">
                    <li>Gained hands-on experience with real-world database systems, supporting day-to-day data engineering operations.</li>
                    <li>Utilized SQL and MySQL to perform data querying, extraction, and basic optimization tasks.</li>
                    <li>Developed foundational understanding of PySpark, focusing on big data processing concepts and distributed computing workflows.</li>
                    <li>Supported senior engineers in the development and analysis of ETL pipelines for structured data.</li>
                    <li>Collaborated with team members to assist in data processing, validation, and pipeline maintenance.</li>
                </ul>
            ),
            icon: <Users className="w-6 h-6 text-white" />,
            skills: ["SQL", "PySpark", "ETL", "Big Data"]
        },
        {
            title: "Lead of Bahawalpur Chapter",
            company: "The Youth Trust",
            period: "2024 - Present",
            type: "Remote",
            description: "Leading community initiatives and managing teams for the Empower with Hundred (EWH) project. Organized the first ration drive and developed leadership, teamwork, and project management skills.",
            icon: <Users className="w-6 h-6 text-white" />,
            skills: ["Leadership", "Team Management", "Project Planning"]
        },
        {
            title: "Senior Instructor for Biology-Majors",
            company: "Umm al Qura Girls H/SS",
            period: "2022 - 2023",
            type: "On-Site",
            description: "Delivered on-site instruction and academic support to biology major students. Managed and optimized hosting activities to ensure smooth operational performance.",
            icon: <BookOpen className="w-6 h-6 text-white" />,
            skills: ["Teaching", "Academic Support", "Curriculum Planning"]
        }
    ];

    return (
        <section id="experience" className="py-24 md:py-32 bg-slate-900/30 relative">
            <div className="max-w-5xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Experience <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">Timeline</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-ml-[0.5px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 items-start mb-16 group ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="md:w-1/2"></div>

                            {/* Timeline Node */}
                            <div className="absolute left-4 md:left-1/2 -ml-6 md:-ml-6 top-0 w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">{exp.icon}</div>
                            </div>

                            {/* Content Card */}
                            <div className="pl-16 md:pl-0 md:w-[calc(50%-48px)] w-full">
                                <div className={`bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative glow-border ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                                            <h4 className="text-xl font-medium text-pink-400">{exp.company}</h4>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 bg-slate-900 rounded-full text-sm text-gray-300 mb-2 border border-slate-700 border-b-2">{exp.period}</span>
                                            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{exp.type}</p>
                                        </div>
                                    </div>

                                    <div className="text-gray-400 mb-6 leading-relaxed">
                                        {exp.description}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-900/80 rounded-md text-xs font-semibold text-gray-300 border border-white/5">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
