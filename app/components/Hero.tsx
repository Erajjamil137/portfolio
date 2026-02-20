"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000); // update every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Noise Texture */}
                <div
                    className="absolute inset-0 opacity-50 mix-blend-overlay"
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.07%22/%3E%3C/svg%3E')" }}
                ></div>
                {/* Mesh Gradient Orb */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full animate-mesh mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full animate-mesh pointer-events-none" style={{ animationDelay: "-5s" }}></div>
            </div>

            <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-8 md:py-12 w-full max-w-7xl mx-auto min-h-screen pt-24">
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-auto gap-4 w-full h-full max-w-[1200px]">

                    {/* 1. Hero Title Card (Spans 4 cols, 2 rows on large) */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden bento-card group flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <span className="material-symbols-outlined text-6xl text-white/5 rotate-12">design_services</span>
                        </div>
                        <div className="space-y-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                                <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">AI Student & Developer</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                                BUILDING<br />
                                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">FUTURE</span><br />
                                WITH INTELLIGENCE.
                            </h1>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a className="group relative px-6 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-10" href="#projects">
                                <span className="relative z-10">View Projects</span>
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity material-symbols-outlined text-black text-sm font-bold">arrow_forward</span>
                            </a>
                            <a className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-colors" href="#">
                                Download CV
                            </a>
                        </div>
                        {/* Abstract decoration */}
                        <div className="absolute -bottom-24 -right-12 w-64 h-64 bg-gradient-to-tl from-primary/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                    </div>

                    {/* 2. Status Widget (Spans 2 cols, 1 row) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 glass-panel rounded-2xl p-6 flex flex-col justify-between bento-card relative overflow-hidden">
                        <div className="flex justify-between items-start">
                            <span className="text-slate-400 text-sm font-medium">Current Status</span>
                            <span className="material-symbols-outlined text-slate-500">radio_button_checked</span>
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-white leading-tight">Open for Opportunities</p>
                                <p className="text-xs text-slate-400">Available for freelance & full-time</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. AI Visualizer (Spans 1 col, 1 row - squareish) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 glass-panel rounded-2xl p-0 flex items-center justify-center min-h-[180px] bento-card relative group overflow-hidden bg-black/40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="cube-scene animate-rotate-3d">
                            <div className="cube">
                                <div className="cube-face front"></div>
                                <div className="cube-face back"></div>
                                <div className="cube-face right"></div>
                                <div className="cube-face left"></div>
                                <div className="cube-face top"></div>
                                <div className="cube-face bottom"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-3 left-3">
                            <span className="text-[10px] font-mono text-primary/70 uppercase">AI_Model_v2.0</span>
                        </div>
                    </div>

                    {/* 4. Location/Time Widget (Spans 1 col, 1 row) */}
                    <div
                        className="col-span-1 md:col-span-2 lg:col-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-between bento-card relative group overflow-hidden"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJQP_60qMseMTjwCuRzz_EgFYC7EIn70_4IxdI0DPUWyryIGx3nzoViOVlkz1zlcT3yyaxWJueqTVguVce8lToLB9LLDM-DCkE1exPw80uruECL_l64ekeqERS2jvZjVU_4H1GFKb1M1xUbXNxL8Hag1-nfG3JrwK_g7pKBQGvV9GOwk7ALdw2tofYmlGldSc15hmkMlPM3np86kr1Csc3MbNhY5GDwGxDmcPYxRRK6ecTdaLxUUDyOavQopzIDgfp7O_2FXh4UHpP')", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                        <div className="relative z-10 flex justify-between items-start w-full">
                            <span className="material-symbols-outlined text-white/80 text-lg">public</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white">Chicago</h3>
                            <p className="text-xs text-slate-300 font-mono">{time}</p>
                        </div>
                    </div>

                    {/* 5. Tech Stack Marquee (Spans 2 cols, 1 row) */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2 glass-panel rounded-2xl p-6 flex flex-col justify-center gap-4 bento-card">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 text-sm font-medium">Core Stack</span>
                        </div>
                        <div className="flex gap-4 items-center justify-between opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex flex-col items-center gap-1 group/icon">
                                <span className="material-symbols-outlined text-4xl group-hover/icon:text-blue-400 transition-colors">code_blocks</span>
                                <span className="text-[10px] font-mono text-slate-500">Python</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 group/icon">
                                <span className="material-symbols-outlined text-4xl group-hover/icon:text-yellow-400 transition-colors">javascript</span>
                                <span className="text-[10px] font-mono text-slate-500">JS</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 group/icon">
                                <span className="material-symbols-outlined text-4xl group-hover/icon:text-cyan-400 transition-colors">data_object</span>
                                <span className="text-[10px] font-mono text-slate-500">React</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 group/icon">
                                <span className="material-symbols-outlined text-4xl group-hover/icon:text-orange-400 transition-colors">terminal</span>
                                <span className="text-[10px] font-mono text-slate-500">Torch</span>
                            </div>
                        </div>
                    </div>

                    {/* 6. Newsletter / CTA (Spans 4 cols, 1 row on Large) */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-4 glass-panel rounded-2xl p-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 bento-card bg-gradient-to-r from-surface-dark to-slate-900/50">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Let's build something together</h3>
                                <p className="text-sm text-slate-400 max-w-md">Reach out for collaborations, AI consulting, or just to say hello.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <a className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-colors" href="mailto:hello@eraj.com">
                                <span>Email Me</span>
                            </a>
                            <div className="flex gap-2">
                                <a aria-label="Github" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors" href="#">
                                    <span className="text-lg font-bold">Gh</span>
                                </a>
                                <a aria-label="Twitter" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors" href="#">
                                    <span className="text-lg font-bold">X</span>
                                </a>
                                <a aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors" href="#">
                                    <span className="text-lg font-bold">in</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
