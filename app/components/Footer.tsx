export default function Footer() {
    return (
        <footer className="bg-[#0F172A] border-t border-slate-800 py-10 relative z-10 w-full text-center">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-gray-400 text-sm font-semibold tracking-wide">
                    © {new Date().getFullYear()} Eraj Jamil. Building the future with AI.
                </p>
            </div>
        </footer>
    );
}
