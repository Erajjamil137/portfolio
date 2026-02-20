"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full px-6 py-6 flex justify-center pointer-events-none">
            <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-12 max-w-4xl w-full pointer-events-auto">
                <a className="flex items-center gap-2 group" href="#">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                        EJ
                    </div>
                    <span className="font-bold tracking-tight text-sm hidden sm:block">ERAJ JAMIL</span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#projects">Work</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#skills">About</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#skills">Stack</a>
                </div>
                <a className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2" href="#contact">
                    <span>Contact</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
            </div>
        </nav>
    );
}
