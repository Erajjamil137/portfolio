"use client";

import { motion } from "framer-motion";
import { Plane, Camera, Users, BookOpen, Palette, Figma, Video, Sparkles } from "lucide-react";

export default function Activities() {
    const activities = [
        { name: "Travelling", description: "Exploring new cultures and destinations", icon: <Plane />, gradient: "from-blue-500 to-cyan-400" },
        { name: "Photography", description: "Capturing moments and perspectives", icon: <Camera />, gradient: "from-purple-500 to-blue-400" },
        { name: "Socializing", description: "Building meaningful connections", icon: <Users />, gradient: "from-pink-500 to-rose-400" },
        { name: "Journalling", description: "Documenting thoughts and experiences", icon: <BookOpen />, gradient: "from-orange-500 to-amber-400" },
        { name: "Logo Development", description: "Creating visual identities", icon: <Palette />, gradient: "from-green-500 to-emerald-400" },
        { name: "Prototyping", description: "Designing in Figma and Canva", icon: <Figma />, gradient: "from-violet-500 to-purple-400" },
        { name: "Videography & Editing", description: "Creating and editing visual stories", icon: <Video />, gradient: "from-red-500 to-pink-400" },
        { name: "Trying New Tools", description: "Always learning and experimenting", icon: <Sparkles />, gradient: "from-indigo-500 to-blue-400" },
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                    >
                        Learning & <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Interests</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.name}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-slate-700/50 hover:border-transparent transition-all h-48"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
                            <div className="absolute inset-0 bg-slate-900 opacity-80 group-hover:opacity-0 transition-opacity duration-500 z-[1]"></div>

                            <div className="relative z-10 p-6 flex flex-col h-full justify-between items-center text-center group-hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white mb-4 group-hover:scale-110 transition-transform duration-500`}>
                                    {activity.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{activity.name}</h3>
                                    <p className="text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
