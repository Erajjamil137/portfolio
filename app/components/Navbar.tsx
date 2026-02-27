"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-900/20" : "bg-transparent py-5 border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer tracking-tight">
                        EJ.
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
                    <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
                    <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                    <a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="text-xs font-semibold px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full transition-all shadow-lg shadow-purple-500/30 glow-border"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
