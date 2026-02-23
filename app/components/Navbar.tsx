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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150 py-3 border-b border-[rgba(0,0,0,0.05)] shadow-sm" : "bg-transparent py-5 border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg hover:text-[#0071e3] transition-colors cursor-pointer tracking-tight">
                        EJ.
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1d1d1f]">
                    <a href="#about" className="hover:text-[#0071e3] transition-colors">Profile</a>
                    <a href="#skills" className="hover:text-[#0071e3] transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-[#0071e3] transition-colors">Projects</a>
                    <a href="#experience" className="hover:text-[#0071e3] transition-colors">Experience</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="text-xs font-semibold px-4 py-2 bg-[#1d1d1f] hover:bg-[#000000] text-white rounded-full transition-all shadow-sm"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
