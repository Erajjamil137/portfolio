"use client";

import { motion } from "framer-motion";

export default function Profile() {
    return (
        <section id="about" className="py-24 md:py-40 bg-white border-y border-[rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-snug text-[#1d1d1f]"
                >
                    Motivated Artificial Intelligence student with experience in
                    <span className="text-[#0071e3]"> C++, Python, MySQL, and C#. </span>
                    Passionate about AI, machine learning, and designing intuitive,
                    user-friendly interfaces.
                </motion.h2>

            </div>
        </section>
    );
}
