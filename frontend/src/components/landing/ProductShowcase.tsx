import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Shield, Zap, BarChart3, Activity, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const versions = [
    {
        id: "personal",
        title: "Personal Health",
        description: "Your daily health command center. Sentinel integrates real-time vital tracking, predictive hypertension analysis, and personalized mental well-being insights.",
        image: "/images/personal-dashboard.jpg",
        features: [
            { icon: Activity, text: "Real-time Vital Tracking" },
            { icon: Zap, text: "AI Risk Prediction" },
            { icon: Shield, text: "Health Analysis" }
        ]
    },
    {
        id: "global",
        title: "Global Intelligence",
        description: "Institutional infrastructure for health networks. Monitor active outbreaks, analyze regional disease spread, and track treatment efficacy with surgical precision.",
        image: "/images/global-monitoring.png",
        features: [
            { icon: Activity, text: "Active Outbreak Tracking" },
            { icon: Globe, text: "Regional Disease Spread" },
            { icon: BarChart3, text: "Treatment Efficacy" }
        ]
    }
];

export function ProductShowcase() {
    const { openAuth } = useAuth();
    const [activeTab, setActiveTab] = useState(versions[0].id);
    const activeData = versions.find(v => v.id === activeTab)!;

    return (
        <section id="technology" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-4 sm:text-5xl"
                    >
                        Intelligence at Every Scale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Whether you're tracking personal wellness or managing institutional resources, our platform provides the tools you need for optimal health outcomes.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1 bg-surface-dark/80 border border-white/10 rounded-full backdrop-blur-2xl shadow-2xl">
                        {/* Sliding Pill Background */}
                        <motion.div
                            className="absolute inset-y-1 left-1 bg-primary rounded-full shadow-[0_0_20px_rgba(19,236,91,0.3)]"
                            initial={false}
                            animate={{
                                x: activeTab === "personal" ? 0 : "100%",
                                width: "calc(50% - 4px)",
                            }}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />

                        {versions.map((v, idx) => (
                            <button
                                key={v.id}
                                onClick={() => setActiveTab(v.id)}
                                className={`relative z-10 flex items-center justify-center gap-3 px-10 py-3.5 rounded-full text-sm font-bold transition-colors duration-300 min-w-[220px] ${activeTab === v.id ? "text-black" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {idx === 0 ? <Smartphone className={`w-4 h-4 transition-colors ${activeTab === v.id ? "text-black" : "text-primary/60"}`} /> : <Globe className={`w-4 h-4 transition-colors ${activeTab === v.id ? "text-black" : "text-primary/60"}`} />}
                                <span className="tracking-wide text-xs uppercase">{v.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-4xl font-bold text-white tracking-tight leading-tight">
                                    {activeData.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {activeData.description}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {activeData.features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-primary/20 transition-all">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            <f.icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-bold text-white/90">{f.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8">
                                <button
                                    onClick={() => openAuth('signup')}
                                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-black font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-sm group"
                                >
                                    <span>Get Started with {activeData.title}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Dashboard Frame */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-emerald-500/20 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0A0A0A]">
                                    <img
                                        src={activeData.image}
                                        alt={activeData.title}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
