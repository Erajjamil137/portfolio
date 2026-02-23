"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "C++", icon: "data_object" },
    { name: "Python", icon: "code_blocks" },
    { name: "MySQL", icon: "database" },
    { name: "C#", icon: "terminal" },
    { name: "Machine Learning", icon: "psychology" },
    { name: "UI/UX Design", icon: "design_services" },
    { name: "Visual Studio", icon: "integration_instructions" },
    { name: "VS Code", icon: "code" },
    { name: "Figma", icon: "draw" },
    { name: "Canva", icon: "palette" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 bg-[#fbfbfd]">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Core Competencies.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg text-[#86868b]"
                    >
                        The tools forming the foundation of my development and design process.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="apple-card p-6 flex flex-col items-center justify-center gap-4 text-center cursor-default bg-white/50 backdrop-blur-md"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]">
                                <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
                            </div>
                            <span className="text-sm font-semibold text-[#1d1d1f] tracking-tight">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
