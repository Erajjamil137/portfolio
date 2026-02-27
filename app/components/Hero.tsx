"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";

export default function Hero() {
    const name = "ERAJ JAMIL";

    const letterVariants: any = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
            }
        })
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-16">

            {/* Neural Network Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] pointer-events-none opacity-40 z-0">
                <div className="absolute inset-0 bg-blue-500 rounded-full mix-blend-screen blur-[120px] animate-float" style={{ left: '-10%', top: '10%' }}></div>
                <div className="absolute inset-0 bg-purple-500 rounded-full mix-blend-screen blur-[120px] animate-float" style={{ left: '20%', top: '-20%', animationDelay: '2s' }}></div>
                <div className="absolute inset-0 bg-pink-500 rounded-full mix-blend-screen blur-[120px] animate-float" style={{ left: '30%', top: '30%', animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-20 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-6"
                >
                    <span className="px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 shadow-lg backdrop-blur-xl text-xs font-semibold uppercase tracking-widest text-gray-300">
                        Welcome to My Portfolio
                    </span>
                </motion.div>

                <div className="flex flex-wrap justify-center mb-4 perspective-1000">
                    {name.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={letterVariants}
                            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform cursor-default [transform-style:preserve-3d]"
                            style={{ paddingRight: char === " " ? "1rem" : "0" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-2xl md:text-4xl font-bold text-white mb-6"
                >
                    AI Student & Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-lg md:text-xl font-medium text-gray-400 max-w-2xl mb-10"
                >
                    Exploring AI, ML & Data Science.
                    <br />
                    <span className="text-pink-400">Building Intelligent Systems • Python • C++ • Machine Learning</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="flex justify-center gap-6 mb-12"
                >
                    <div className="w-14 h-14 rounded-full bg-slate-800 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.3)] animate-float" style={{ animationDelay: '0s' }}>
                        <Brain className="w-6 h-6" />
                    </div>
                    <div className="w-14 h-14 rounded-full bg-slate-800 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-float" style={{ animationDelay: '0.5s' }}>
                        <Cpu className="w-6 h-6" />
                    </div>
                    <div className="w-14 h-14 rounded-full bg-slate-800 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-float" style={{ animationDelay: '1s' }}>
                        <Zap className="w-6 h-6" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
