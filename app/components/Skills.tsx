"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const categories = [
        {
            title: "Programming Languages",
            items: [
                { name: "Python", value: 90, emoji: "🐍" },
                { name: "C++", value: 88, emoji: "⚙️" },
                { name: "C#", value: 85, emoji: "💠" },
                { name: "MySQL", value: 82, emoji: "🗃️" },
            ]
        },
        {
            title: "AI/ML & Data Science",
            items: [
                { name: "Machine Learning", value: 85, emoji: "🧠" },
                { name: "NLP", value: 80, emoji: "💬" },
                { name: "Data Structures", value: 88, emoji: "🔬" },
                { name: "OOP", value: 90, emoji: "🏗️" },
            ]
        },
        {
            title: "Development Tools",
            items: [
                { name: "Visual Studio", value: 85, emoji: "💻" },
                { name: "VS Code", value: 90, emoji: "📝" },
                { name: "MySQL Workbench", value: 80, emoji: "🔧" },
                { name: "Git", value: 75, emoji: "🌱" },
            ]
        },
        {
            title: "Design & Networking",
            items: [
                { name: "Figma", value: 85, emoji: "🎨" },
                { name: "Canva", value: 90, emoji: "✨" },
                { name: "CISCO Packet Tracer", value: 78, emoji: "🌐" },
                { name: "MS Office", value: 92, emoji: "📊" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Tech <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, catIndex) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm shadow-lg glow-border"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4 tracking-tight">
                                {cat.title}
                            </h3>

                            <div className="space-y-6">
                                {cat.items.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 font-semibold flex items-center gap-2">
                                                <span>{skill.emoji}</span> {skill.name}
                                            </span>
                                            <span className="text-sm font-bold text-blue-400">{skill.value}%</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                                            >
                                                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
