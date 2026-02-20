export default function Footer() {
    return (
        <>
            <footer className="border-t border-[#243647] bg-[#0d141c] py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2024 Eraj Jamil. All rights reserved.</p>
                    <p className="text-slate-600 text-sm flex items-center gap-1">
                        Designed with <span className="material-symbols-outlined text-[16px] text-red-900">favorite</span> in AI
                    </p>
                </div>
            </footer>

            {/* Floating Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <div className="glass-panel px-2 py-2 rounded-2xl flex items-center gap-1 shadow-2xl shadow-black/50 border border-white/10">
                    <a href="#" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all tooltip-trigger relative group">
                        <span className="material-symbols-outlined text-[20px]">home</span>
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">Home</span>
                    </a>
                    <a href="#projects" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all relative group">
                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">Projects</span>
                    </a>
                    <a href="#skills" className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all relative group">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">About</span>
                    </a>
                    <div className="w-px h-6 bg-white/10 mx-1"></div>
                    <a href="#contact" className="w-10 h-10 rounded-xl flex items-center justify-center text-primary bg-primary/10 hover:bg-primary/20 transition-all relative group">
                        <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">Chat</span>
                    </a>
                </div>
            </div>
        </>
    );
}
