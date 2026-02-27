"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, Smartphone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full point-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-800/80 p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-md shadow-2xl relative glow-border"
                    >
                        <div className="mb-8">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Get in Touch</h3>
                            <p className="text-gray-400">Ready to process your ideas into reality!</p>
                        </div>

                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full flex-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                                </div>
                                <div className="w-full flex-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Message</label>
                                <textarea placeholder="How can I help you?" rows={5} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none" />
                            </div>
                            <button type="submit" className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-500/25 group">
                                Launch Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center"
                    >
                        <div className="relative mb-8 group">
                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/50 animate-spin-slow"></div>
                            <div className="absolute inset-4 rounded-full bg-blue-500/20 blur-xl"></div>
                            <div className="w-32 h-32 rounded-full border-4 border-slate-800 bg-slate-800 flex items-center justify-center text-6xl relative z-10 group-hover:scale-105 transition-transform">
                                🤖
                            </div>
                        </div>

                        <h3 className="text-4xl font-black text-white mb-6 tracking-tight">Let's Connect</h3>

                        <div className="flex flex-col gap-6 mb-10 w-full max-w-sm">
                            <a href="mailto:erajjamil@example.com" className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all group">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 text-left">Email Me</p>
                                    <p className="text-white font-medium text-left">erajjamil@example.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800 hover:border-purple-500/50 transition-all group">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <Smartphone />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 text-left">Call Me</p>
                                    <div className="flex flex-col items-start">
                                        <span className="text-white font-medium">+92 302 6669973</span>
                                        <span className="text-white font-medium">+92 333 3204300</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#181717] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all border border-slate-700">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/eraj-jamil661862328" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all border border-slate-700 border-dashed">
                                <Linkedin size={24} />
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
