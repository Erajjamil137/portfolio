export default function Skills() {
    return (
        <section id="skills" className="relative w-full pt-16 pb-24 border-t border-white/5 bg-background-dark">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="flex flex-col items-center w-full max-w-[1400px] mx-auto px-4 md:px-10">

                {/* Hero Section */}
                <div className="w-full text-center mb-16 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Available for new projects</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                        Tech Stack<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400">&amp; Expertise</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A curated arsenal of tools and technologies I use to build intelligent systems and scalable applications.
                    </p>
                </div>

                {/* Marquee Section */}
                <div className="w-full mb-32 relative group">
                    {/* Row 1: Left to Right */}
                    <div className="marquee-mask w-full overflow-hidden mb-6 relative">
                        <div className="flex gap-4 w-[200%] items-center justify-around opacity-90 hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="Python logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmjvYNLPBDIF2mdhJLUdttGQ1BVwjvOQ1ekVpgz52Yg0ed62VnMxg1P445B7lzCkQBjnTo_EO5EUqMS5g_lufQ0ved47YtPeOsSzXUHAIq1KsvNm0PdUheZcK4N45IkfJrmMRRnMWr5H0PkMsZz7PWV9T_pNrKkXIjYNBZZe2ZhtvrmEW1P_NNrUUfyqZ3fpYdhcbMyfrSMlCWkYPT2J2BwZv6-HXdt9EVhXzguPuZJLmvCIqD6uVL9wIZtrQUaFJKrSgoMjybEia_" />
                                <span className="font-bold text-slate-200">Python</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="C++ logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQs4gm5JpDeScI8qTjhAH1jK_VPIvxGQ5nSRCCbz7g9w9p2HeCy929be2XTA4uxdvf8wnp59efVujDUAzvc1FSA5-GOBSJ3h_jXS5EzznZxrh7SPqqUp7va5SX_0RobfzYxyO16trAGS324NSu8DsjpN0CvS4LXcAJmHuLrMac5KiBIWxASG2gs7H0tHOyiIwT04tYUfW1q_qU30AhRbvnRyPNNZQh2hRGh75EYJqq8sblMf9Mwtmf5BXnFq-iipemPMaC2bB_pO-b" />
                                <span className="font-bold text-slate-200">C++</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="Java logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5PO4VDgequ-y-ykyBd0TdFb7_GQUQGznZvUfqvFhR_QQX3Knkw0_t5hBzti-2nxofWrUofFV_IzaFyILY8cf_efSFGpkw1HtOtqZRrBdRW8H6p6v8cnJWj6Kr2YJkMhuepw7VlLFXtWjTbwOV86IvXXbjBtH5KXCjyxtvXhyYY4KRbcFXCQju15nureXqRBxXln3C2SRVcQPLk56_6LQd5M4iGazblOQhVFlI6WYNxVaud753UbVQu1ejr-d01L33UutdcW-rd9hR" />
                                <span className="font-bold text-slate-200">Java</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="JavaScript logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCByxWYpJoq3UBGuyoT9wCpd2JV6pLatHqg4XrAZvU9npdy271UngayBjBqCQWBPU3gfBBVsWjYwyN6_U-ZkewO3Ki7R93Ziw0oGNqjQeSjfDp1rSMpgf_ewS5lmV_G02JFeqfwHzSiuHt-Mo9vimGlEErhhCQBkMiYYXcJ2Y_oizcuUdMrxKHPJqU7lKGP_vgdzjcaA1Y4l-UWHFY3idmFSXDjiMcseh4-RPI6gw1LqQm8anFSTdfBKcNOXwjLKVcUoQEHOuxYDtuZ" />
                                <span className="font-bold text-slate-200">JavaScript</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="TypeScript logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ03iZuLaYICLgyRS2aySn2mwNi33IOnZgy3MNPpu5DeAhTdhdfzaq8lUiFdrgUtVrwE0O4Kn_vSpK1Xdz9ZHXFKiKmN4rriPdcuO_Ts6Oy6a4RNtZloTNxqgcD3kLIHXAUFA1egK8IFuNgBzhZlXi9kFogpT7AbY4TlEMC9li9rCw4U7K50crcXhCF8YdthzIPc7kHAhrtqgzNvl4pUHuLH2Eg8o0OlE6oWVytnyy9Exruzr9UjnafaE1gZ9AZ66MheqAPZWi3URI" />
                                <span className="font-bold text-slate-200">TypeScript</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="Swift logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFeBfiyzduPNPuy5NaByhzbimW6hGsRvBpmJY30CW9b8M6UgdHz3X-skHzdUbN6GW77mHYSIzyu90Mf7kkEPL-ttRLaZt9ftWnkOUNe9fZcFkCORW8M3A4yjxWNPAO0mFQmSnq-xawmIZLm88GtECdP5KSIflA_VxUyPl419QSECODO39YAtJlvHxTY6w9mqxtvRr4z0VaCC1j7E5L-UXqgoBypbNkLlJnBcO1QF69X-dEYYX6uxfWEnlnP8bMOtshX0FHz8pCPPOI" />
                                <span className="font-bold text-slate-200">Swift</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="Rust logo" className="w-8 h-8 invert dark:invert-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQVjmL8cDL4NB85p6b1PxyeD7zek6NEHzvdscgHd6R-hz9z3LN8_en8dwraCUEaayjkEPodFEgbl2TMm8IBKhfA6-fBS1FT-XRN_2fG14D3lby6MCXuBkaqSKqu1xPY_B4BeCV4y7G0HA6-07NnVX0oPYQTXmut2B_mT1t1OoIPm8QwTAsHvPTIoGh93KvAkCQzFeyexIkKzWog3c121NfnrOM83BPcSuJ7pYdYCU348yT28xiV3dyjjAKikMjFdHIHJpcSdpPpSd-" />
                                <span className="font-bold text-slate-200">Rust</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Right to Left */}
                    <div className="marquee-mask w-full overflow-hidden">
                        <div className="flex gap-4 w-[200%] items-center justify-around opacity-90 hover:opacity-100 transition-opacity duration-300 ml-[-100px]">
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="TensorFlow logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjAVB0SjXBsGgmrrSeh0V61C1vREQzk18YbHcDSB2mFevIhuJJBWCx63Gac5Ype_Q18tibrq7MeR8uXYs-YQfgQnVOqJH29v5Ox2OE-VpyWROphRjoAz5vF_Lo26Iy0Sh3zNtffR46MOM-97EQJLFSNIqhXPWxJVkgLH-TkkuLCPS4gXNtr1tHyDzubEFS09SU9m_mAbVPcBCJ7SwXm3Ex6W7HC13dLELhqbrPgTVp8XxHR838pnbHd8d43Cz3SMIATD8bZ65zPvSa" />
                                <span className="font-bold text-slate-200">TensorFlow</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="PyTorch logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzyLi5ljtmTBg_XgAtkx9NoGLKI38BexnR1mfKa1u1JtqmI7zIOE0cid9_IynxLKQDPcDMQCHEBK0qPrcva0gS3PXxt7uRlr6G6cXLoNjyRCxoZzyspDuECXWgyyoTi15Be6D8g5g7m6ETX5AZGIyC6hS3CT0YSDTrOyEkuoFQ1UXJrgRijHlNktKU03m3yz5lnu2rh9wZ9vEXPTEQDacNTvxuHLYJ9Qz4czWSlC7yr7raESdI8qEMobSH3Ci5k-D2QOEBG_9nl28N" />
                                <span className="font-bold text-slate-200">PyTorch</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="MySQL logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4QYS-JomizO8z4WziOXycB1GlN4xoNgjYOnG8HXFtBUb7bbzHYVqPfAQfIw6qAhMpaUIdhd4ZDhKAcn3KBKOPyXLqomaf1PXG3WCvxGQUrh_HAIG6gMJExZE8DS6esAEEBbn2gvbLSWHYmRxXIgugsMEQxt0XpVp3QP1lTDtFGDVsyKBAyU18gWIe1p4nLsXDLPlAMR9_ElQKetVMbk1gKATwdU-X5w9_Iat3PKQS6LN_p837lFsvqqEHTR_VStthKkZTXJVbOxmK" />
                                <span className="font-bold text-slate-200">MySQL</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="Docker logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYVTBKz_aiSn2zVQks2T_2SH9dlFA371Kl4tghnC9_iSebr2nnDYAXxBTAHST7OrtGy31n2E0QMhYHPjq8ezg_jRrDRz1gbEz3F-KJdMfOSPM_-3dbjNaq7B1SBymMVQV9FYbww4gc8zt8To5QDXLBsKKI_ZsRoSDI5VmCoJCsExjmapxXjTngF-HBemuPMUqLic8SIhW04Oz4Gakrhu07UnGXFaQwlGuQKw6AawhVJpjYYCeWzERmfNJAz5dK05hwfF5aXmlsAgZ4" />
                                <span className="font-bold text-slate-200">Docker</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="React logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wJf2m7HzM1ISxQrjGSBwMnw3PwGNpf1wAy3hcjRVIVU_w1jqBS8hm78zCyEf2nNwqIAzaKU4Ys6o7C5JNtVfI_Crh9XlVdFaOVkl3GWSbutJ7PGBVNocAAY63tNZ5UY1EPwbb-iqVjg8TstxlP-tPMGzOq7KZZwkZyLwar5y8HMoSBbs07_uHDuvCkdDg4gPkmUElfotoZ9dhSzkcKdN7i5skCoDkgxqvQo7MADMDCc24EhSkhe0oSKnT6NWxMGgbjpnCOUXPCIG" />
                                <span className="font-bold text-slate-200">React</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="AWS logo" className="w-8 h-8 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC0V8MwP6zvjtpMGx7Hz8R6Latog6PRmVEfMKH5FhFO82YyI3TCaiZalS9XsygOnR-OTFjqlLIhHMHrxW3ORxU4wo4vPj0_0Uc2mZuLBgE3HCCNfSq0csnuGajjZaAFUEpT_Cr3WC8lkoAyKBqObaE8zVa5tiU3oX0MZFAfUVJk7_zIyzuP7obx5dR2R2ViAtqBURp62IPprRib0u8O4zlrJ6avvncHbuE9io765-LwF1QtACzE5ABgzdonRzkTzbYtVVV6sIWdF-a" />
                                <span className="font-bold text-slate-200">AWS</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/40 border border-slate-700/30 rounded-lg min-w-[160px] justify-center">
                                <img alt="Git logo" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAYZ9P4jII_B7tTOj-jlQeeOScdSZGWYZM2MFwO_BJOYIuScieaan5Nb0437TmfCsowLDwTAo8eN7EeikyHHaslDhha7hEZVdKydUdExdmj9Wx7UqOmIAj_01pQaGD56HCK5a2iyiK2uV3f62mrxItl27vromtrmPqnlQ456IlJEF9aMc7rviwkMR3AnqKd_E6Zl_2VRbGk5Mi5_ficvAjahoEs_r_G3LMF6Sy0pcEnsIniCE47CH_VWBjSj-_msbgtStvpuXeOwpn" />
                                <span className="font-bold text-slate-200">Git</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Cards Section */}
                <div className="w-full relative z-10">
                    <div className="flex items-end justify-between mb-8 px-2">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Skills</h2>
                            <p className="text-slate-500 text-sm">Deep dive into my core competencies.</p>
                        </div>
                        <a className="text-primary text-sm font-medium hover:text-white transition-colors flex items-center gap-1 group" href="#">
                            View All Skills
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="group border-beam-card rounded-lg p-8 flex flex-col h-full relative overflow-hidden hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-5xl text-primary rotate-12">psychology</span>
                            </div>
                            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(48,140,232,0.15)]">
                                <span className="material-symbols-outlined text-3xl">smart_toy</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">AI &amp; Machine Learning</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Specializing in NLP and Computer Vision models. I build intelligent agents that can see, understand, and interact with the world.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">TensorFlow</span>
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">PyTorch</span>
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">OpenCV</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group border-beam-card rounded-lg p-8 flex flex-col h-full relative overflow-hidden hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-5xl text-primary rotate-12">dns</span>
                            </div>
                            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(48,140,232,0.15)]">
                                <span className="material-symbols-outlined text-3xl">layers</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Full Stack Dev</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Building scalable web apps with React and Node. Focusing on performant, accessible, and delightful user experiences.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">React</span>
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">Next.js</span>
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">Tailwind</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group border-beam-card rounded-lg p-8 flex flex-col h-full relative overflow-hidden hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-5xl text-primary rotate-12">database</span>
                            </div>
                            <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(48,140,232,0.15)]">
                                <span className="material-symbols-outlined text-3xl">storage</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Data Engineering</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                Optimizing pipelines for massive datasets. Ensuring data integrity and availability for real-time analytics.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">SQL</span>
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">Kafka</span>
                                <span className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700">Spark</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
