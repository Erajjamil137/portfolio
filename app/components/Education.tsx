"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                    {/* Education Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-10"
                        >
                            Academic History.
                        </motion.h3>

                        <div className="flex flex-col gap-10 border-l-2 border-slate-100 ml-3 pl-8">

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#0071e3]"></div>
                                <h4 className="text-xl font-bold text-[#1d1d1f] mb-1">Air University</h4>
                                <p className="text-[#86868b] font-medium">B.S. Artificial Intelligence</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-white border-2 border-slate-300"></div>
                                <h4 className="text-xl font-bold text-[#1d1d1f] mb-1">Pre-Medical</h4>
                                <p className="text-[#86868b] font-medium">F.S.C — Grade A+</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-white border-2 border-slate-300"></div>
                                <h4 className="text-xl font-bold text-[#1d1d1f] mb-1">Science</h4>
                                <p className="text-[#86868b] font-medium">Matriculation — Grade A+</p>
                            </motion.div>

                        </div>
                    </div>

                    {/* Languages & Certifications Column */}
                    <div className="flex flex-col gap-16">

                        {/* Languages */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-8"
                            >
                                Languages.
                            </motion.h3>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-5 py-2.5 rounded-full bg-[#f5f5f7] border border-[rgba(0,0,0,0.02)] text-sm font-semibold text-[#1d1d1f]">
                                    Urdu (Native)
                                </span>
                                <span className="px-5 py-2.5 rounded-full bg-[#f5f5f7] border border-[rgba(0,0,0,0.02)] text-sm font-semibold text-[#1d1d1f]">
                                    English (Advanced)
                                </span>
                            </div>
                        </div>

                        {/* Certifications Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="apple-card p-8 bg-[#fbfbfd] border border-[rgba(0,0,0,0.03)]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#0071e3]">military_tech</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#1d1d1f]">Certifications</h3>
                            </div>
                            <p className="text-[#86868b] font-medium leading-relaxed">
                                A track record of continuous learning, upskilling, and achievements in computing and science.
                            </p>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}
