"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="bg-white border-t border-[rgba(0,0,0,0.05)] py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <div className="w-16 h-16 bg-[#f5f5f7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#1d1d1f]">
                        <span className="material-symbols-outlined text-3xl">mark_email_read</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
                        Let's build together.
                    </h2>
                    <p className="text-[#86868b] text-lg max-w-lg mx-auto mb-8 font-medium">
                        Open to discussing AI product architecture, technical challenges, or simply saying hello.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:hello@erajjamil.com"
                            className="px-8 py-3.5 bg-[#1d1d1f] text-white text-sm font-semibold rounded-full hover:bg-black transition-colors shadow-md w-full sm:w-auto text-center"
                        >
                            Email Me
                        </a>
                        <div className="flex gap-2 w-full sm:w-auto justify-center">
                            <a href="#" className="w-12 h-12 rounded-full border border-[rgba(0,0,0,0.05)] bg-[#fbfbfd] hover:bg-white hover:border-[#0071e3] flex items-center justify-center text-[#1d1d1f] transition-all shadow-sm">
                                <span className="font-bold text-xs tracking-tighter">LI</span>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-[rgba(0,0,0,0.05)] bg-[#fbfbfd] hover:bg-white hover:border-[#0071e3] flex items-center justify-center text-[#1d1d1f] transition-all shadow-sm">
                                <span className="font-bold text-xs tracking-tighter">GH</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="pt-8 border-t border-[rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#86868b] text-xs font-semibold tracking-wide">
                        © {new Date().getFullYear()} Eraj Jamil. All rights reserved.
                    </p>
                    <p className="text-[#86868b] text-xs font-semibold tracking-wide flex items-center gap-1">
                        Designed with Premium Aesthetics
                    </p>
                </div>

            </div>
        </footer>
    );
}
