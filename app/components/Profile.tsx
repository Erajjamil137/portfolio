"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Heart } from "lucide-react";

export default function Profile() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-900/50">
            {/* Dynamic Background Design Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Rotating dashed border */}
                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-500/50 animate-spin-slow"></div>
                            {/* Outer Glow */}
                            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-40"></div>
                            {/* Profile Image */}
                            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 flex items-center justify-center group">
                                <img src="/profile.jpg" alt="Eraj Jamil" className="w-full h-full object-cover z-10 transition-transform group-hover:scale-110"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }} />

                                {/* Fallback pattern if image goes missing or fails to load */}
                                <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center text-slate-600 z-0">
                                    <div className="w-32 h-32 bg-slate-700/50 rounded-full flex items-center justify-center border-4 border-slate-600 mb-2">
                                        <span className="text-4xl font-black">EJ</span>
                                    </div>
                                </div>
                            </div>

                            {/* Badges */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -left-6 bg-slate-800 border border-blue-500/30 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20"
                            >
                                <Code className="text-blue-400 w-4 h-4" />
                                <span className="text-xs font-semibold text-gray-300">Fluent in algorithms</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 -right-6 bg-slate-800 border border-pink-500/30 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20"
                            >
                                <Heart className="text-pink-400 w-4 h-4" />
                                <span className="text-xs font-semibold text-gray-300">Passionate about AI</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 left-10 bg-slate-800 border border-purple-500/30 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20"
                            >
                                <Coffee className="text-purple-400 w-4 h-4" />
                                <span className="text-xs font-semibold text-gray-300">Powered by caffeine</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm currently pursuing a B.S. in Artificial Intelligence at Air University, Islamabad. With hands-on experience in C++, Python, MySQL, and frontend development using C#, I'm building practical skills through diverse projects ranging from game development to legal information retrieval systems.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            My journey includes leadership experience at The Youth Trust, where I led community initiatives and managed teams, along with teaching experience as a Senior Instructor. I'm passionate about creating user-friendly designs and making AI accessible through innovative applications.
                        </p>

                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border border-white/10 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <span className="text-5xl text-purple-400/50 absolute -top-4 -left-2 font-serif opacity-50">"</span>
                                <p className="text-xl md:text-2xl font-bold text-white text-center italic mt-4 mb-2">
                                    Building the future with AI, one algorithm at a time.
                                </p>
                                <span className="text-5xl text-purple-400/50 absolute -bottom-8 -right-2 font-serif opacity-50">"</span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
