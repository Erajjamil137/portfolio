"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-[#fbfbfd]">
            <div className="max-w-4xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-16 text-center"
                >
                    Professional Experience.
                </motion.h2>

                <div className="flex flex-col gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="apple-card p-8 md:p-10 bg-white border border-[rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-blue-500 text-3xl">diversity_3</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1 tracking-tight">The Youth Trust</h3>
                                <p className="text-[#86868b] font-medium">Lead of Bahawalpur Chapter (Remote)</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="apple-card p-8 md:p-10 bg-white border border-[rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-indigo-500 text-3xl">school</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1 tracking-tight">Umm al Qura Girls H/SS</h3>
                                <p className="text-[#86868b] font-medium">Senior Instructor (On-Site)</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
