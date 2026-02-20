export default function Contact() {
    return (
        <section id="contact" className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0d141c]">
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's build the future together.</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Currently specializing in Generative AI applications and large language models. Always open to discussing new opportunities or technical challenges.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">mail</span>
                        hello@erajjamil.com
                    </a>
                    <a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">link</span>
                        LinkedIn
                    </a>
                    <a className="flex items-center gap-2 text-white hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">code</span>
                        GitHub
                    </a>
                </div>
            </div>
            <div className="bg-[#1a2632] rounded-xl p-8 border border-[#243647]">
                <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">Python</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">TensorFlow</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">PyTorch</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">React</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">TypeScript</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">Node.js</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">AWS</span>
                    <span className="px-3 py-1.5 bg-[#111921] border border-slate-700 rounded text-sm text-slate-300">Docker</span>
                </div>
            </div>
        </section>
    );
}
