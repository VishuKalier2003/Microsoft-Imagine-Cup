import { Radar, LineChart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Radar,
        title: "Real-time Tracking",
        description: "Monitor patient vitals and disease spread vectors in real-time with sub-second latency updates across the global network.",
        color: "primary",
    },
    {
        icon: LineChart,
        title: "Predictive Analysis",
        description: "AI-driven forecasts that help institutions allocate resources effectively before outbreaks peak, ensuring prepared responses.",
        color: "blue-400",
    },
    {
        icon: ShieldCheck,
        title: "Data Privacy",
        description: "End-to-end encryption compliant with HIPAA and GDPR, ensuring sensitive medical data remains secure at all times.",
        color: "emerald-400",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export function Features() {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-16">
            <div className="mb-16 text-center">
                <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Engineered for <span className="text-primary">Global Resilience</span>
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Our platform combines cutting-edge AI with secure decentralized architecture to protect communities worldwide.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-8 md:grid-cols-3"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative h-full rounded-2xl border border-white/5 bg-[#0a0a0a]/50 p-8 pt-12 backdrop-blur-xl transition-all hover:border-primary/20 hover:bg-[#0a0a0a]/80"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />

                        <div className="absolute -top-6 left-8 inline-flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111] text-primary shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                            <feature.icon className="size-7" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="mb-4 font-display text-xl font-bold text-white transition-colors group-hover:text-primary">
                                {feature.title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                                {feature.description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary/0 transition-all duration-300 group-hover:text-primary/100">
                                <span>Learn more</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
