"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-16">

            {/* Siri-like ambient gradient mesh */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] pointer-events-none opacity-50 z-0">
                <div className="absolute inset-0 bg-blue-400 rounded-full mix-blend-multiply blur-[120px] animate-float-gentle" style={{ left: '-10%', top: '10%' }}></div>
                <div className="absolute inset-0 bg-indigo-300 rounded-full mix-blend-multiply blur-[120px] animate-float-gentle" style={{ left: '20%', top: '-20%', animationDelay: '2s' }}></div>
                <div className="absolute inset-0 bg-purple-200 rounded-full mix-blend-multiply blur-[120px] animate-float-gentle" style={{ left: '30%', top: '30%', animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-20 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="px-4 py-1.5 rounded-full bg-white/70 border border-[rgba(0,0,0,0.05)] shadow-sm backdrop-blur-xl text-xs font-semibold uppercase tracking-widest text-[#86868b]">
                        Portfolio 2024
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.05]"
                >
                    ERAJ JAMIL
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-3xl font-medium text-[#86868b] max-w-2xl mb-12 leading-snug"
                >
                    Artificial Intelligence Student <br />
                    <span className="text-[#1d1d1f]"> & Aspiring Software Developer.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3.5 bg-[#0071e3] hover:bg-[#0077ED] text-white text-sm font-semibold rounded-full transition-colors shadow-[0_4px_14px_0_rgba(0,113,227,0.39)] hover:shadow-[0_6px_20px_rgba(0,113,227,0.23)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3.5 bg-white/80 backdrop-blur-xl text-[#1d1d1f] text-sm font-semibold rounded-full transition-all border border-[rgba(0,0,0,0.08)] hover:border-gray-300 hover:bg-white shadow-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Futuristic Floating Glass Panels */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-16 w-full max-w-5xl px-6 flex justify-center gap-4 z-10 pointer-events-none"
            >
                <div className="w-1/3 h-64 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] transform -rotate-6 translate-y-12"></div>
                <div className="w-1/2 h-80 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transform z-20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[120px] text-blue-500/10">memory</span>
                </div>
                <div className="w-1/3 h-64 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] transform rotate-6 translate-y-12"></div>
            </motion.div>

        </section>
    );
}
