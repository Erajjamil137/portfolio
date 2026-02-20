export default function Projects() {
    return (
        <section id="projects" className="relative w-full border-t border-[#243647] bg-[#0d141c]">
            {/* Sticky Header Label */}
            <div className="absolute left-6 top-8 z-10 flex flex-col gap-2 pointer-events-none md:sticky md:top-32 md:left-12 md:w-48">
                <h2 className="text-white/40 text-sm font-bold uppercase tracking-widest">Selected Works</h2>
                <div className="w-8 h-[1px] bg-primary"></div>
            </div>

            {/* Scroll Container */}
            <div className="horizontal-scroll-container flex gap-8 px-6 py-20 md:pl-64 md:pr-40 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-auto min-h-[600px] items-center">

                {/* Project 1: LexiFind */}
                <article className="relative group flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-[500px] md:h-[600px] snap-center rounded-2xl overflow-hidden bg-zinc-900 border border-[#243647] hover:border-primary/50 transition-colors duration-500 cursor-none">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDavxEPFqFWx1dhSsTDXDpoK9laUB7bU7r56NKLHGEnvb79mFMqCdtPdZsRXbnnI0sfYSN_RRZZ_FvELDIo6egIsISeR9GOLkG-lnxS8_wpsBzbPOHNg0VyaY96HIGdlkzqKjlM6QbWSfwsDntnEavI7pNZq4YmNRPLzrvFH-nNNsLCLdDd1Hny2n5XIKRV3WskQqGDQdfoGjOhR35R8FmWNf5ss3h1-dPYIY-V7RZx812be6sHaMiWJXvRS4J4sORZVcKQJzBNjBi2')" }}
                        ></div>
                    </div>

                    <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">
                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-primary">Python</span>
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300">TensorFlow</span>
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300">React</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="relative">
                                <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-2 drop-shadow-lg mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity">
                                    LexiFind
                                </h3>
                                <p className="text-xl md:text-2xl font-medium text-slate-200">AI-Powered Semantic Search</p>
                            </div>
                            <div className="md:text-right">
                                <span className="block text-6xl font-bold text-white/5 mb-2">01</span>
                                <button className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group/btn">
                                    View Case Study
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-24 h-24 bg-primary/90 rounded-full backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-[0_0_30px_rgba(48,140,232,0.4)] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                            VIEW
                        </div>
                    </div>
                </article>

                {/* Project 2: NeuroNet */}
                <article className="relative group flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-[500px] md:h-[600px] snap-center rounded-2xl overflow-hidden bg-zinc-900 border border-[#243647] hover:border-primary/50 transition-colors duration-500 cursor-none">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXH2TJ6rnojUloYED7oYenNhJglmB6bLjFpCq-HiObdZVBetDtDELTpXRd6FJp_BlxiHfU9_omSJfVnpDgUMPeYKK99fXZLiBFcKMr860j6Yt5ripCrT6TJEDulbI1ypI-Dfk5-1RuJF6iZN3hL8gKoj_kJyGtvkQDBy7xFDJUgRJf9DbLgvnbqSiS0NdPFZhe9wtipXBqvy_mG7StSuj_QA8THsSxgtwShjCIJoc7AznGHT9_kRCRsplguI3kvPMvVzFfXF-ecULD')" }}
                        ></div>
                    </div>
                    <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">
                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-primary">D3.js</span>
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300">Python</span>
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300">Flask</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="relative">
                                <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-2 drop-shadow-lg mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity">
                                    NeuroNet
                                </h3>
                                <p className="text-xl md:text-2xl font-medium text-slate-200">Predictive Modeling Dashboard</p>
                            </div>
                            <div className="md:text-right">
                                <span className="block text-6xl font-bold text-white/5 mb-2">02</span>
                                <button className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group/btn">
                                    View Case Study
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-24 h-24 bg-primary/90 rounded-full backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-[0_0_30px_rgba(48,140,232,0.4)] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                            VIEW
                        </div>
                    </div>
                </article>

                {/* Project 3: Visionary */}
                <article className="relative group flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] h-[500px] md:h-[600px] snap-center rounded-2xl overflow-hidden bg-zinc-900 border border-[#243647] hover:border-primary/50 transition-colors duration-500 cursor-none">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcSm3oTZ8gnv_6njjMc6oW7_yTUtr9Q78vSllZdf68_aYxopyZ0SLHsKzCVsTeNlBMaG0G4x3fkVGsWEVohi8zcvgaIlxeGEm11vsY29fyHh4DYHgoIiB2u5247G6G8ZLAP_dipytL8KHo8m-4UIKRbPCdD_O4zeT_kzdhJoh3ukMeZcwLUOnJ9YBwnIpzJzU8Y7NLSFxTP_Qqd1ZMZroOV8Bv-bmWGQ8gk-Bek_6iJPCBgd3qYBT2x4r2w8IpM-mIP4SBrHfYNd14')" }}
                        ></div>
                    </div>
                    <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">
                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-primary">OpenCV</span>
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300">PyTorch</span>
                            <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300">Swift</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="relative">
                                <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-2 drop-shadow-lg mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity">
                                    Visionary
                                </h3>
                                <p className="text-xl md:text-2xl font-medium text-slate-200">Computer Vision for Accessibility</p>
                            </div>
                            <div className="md:text-right">
                                <span className="block text-6xl font-bold text-white/5 mb-2">03</span>
                                <button className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group/btn">
                                    View Case Study
                                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-24 h-24 bg-primary/90 rounded-full backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-[0_0_30px_rgba(48,140,232,0.4)] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out">
                            VIEW
                        </div>
                    </div>
                </article>

                {/* See More Placeholder */}
                <article className="relative group flex-shrink-0 w-[40vw] md:w-[30vw] h-[500px] md:h-[600px] snap-center rounded-2xl overflow-hidden bg-zinc-900 border-2 border-dashed border-[#243647] hover:border-primary/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">add</span>
                        </div>
                        <h4 className="text-xl font-bold text-white">View All Projects</h4>
                        <p className="text-sm text-slate-400 mt-2">See what else I've built</p>
                    </div>
                </article>

            </div>

            {/* Scroll Progress / Navigation Hint */}
            <div className="px-6 py-6 md:pl-64 flex items-center gap-4 text-slate-500">
                <span className="material-symbols-outlined text-sm animate-bounce">arrow_right_alt</span>
                <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
            </div>
        </section>
    );
}
