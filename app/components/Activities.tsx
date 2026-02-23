"use client";

import { motion } from "framer-motion";

const hobbies = [
    { name: "Travelling", icon: "flight_takeoff", color: "bg-blue-50 text-blue-500" },
    { name: "Photography", icon: "photo_camera", color: "bg-emerald-50 text-emerald-500" },
    { name: "Journalling", icon: "edit_document", color: "bg-orange-50 text-orange-500" },
    { name: "Logo Dev", icon: "brush", color: "bg-purple-50 text-purple-500" },
    { name: "Prototyping", icon: "view_quilt", color: "bg-rose-50 text-rose-500" },
    { name: "Designing", icon: "format_paint", color: "bg-sky-50 text-sky-500" },
    { name: "Exploring", icon: "explore", color: "bg-indigo-50 text-indigo-500" },
];

export default function Activities() {
    return (
        <section className="py-24 md:py-32 bg-[#fbfbfd]">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-12"
                >
                    Activities & Interests.
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby.name}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="apple-card px-6 py-4 flex items-center gap-3 bg-white border border-[rgba(0,0,0,0.02)] cursor-default hover:-translate-y-1 hover:shadow-lg transition-all"
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${hobby.color}`}>
                                <span className="material-symbols-outlined text-sm">{hobby.icon}</span>
                            </div>
                            <span className="font-semibold text-[#1d1d1f] text-sm tracking-tight">{hobby.name}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
