import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Sarah Chen",
        role: "Chief of Medicine, Metro Health",
        content: "Sentinel has revolutionized our pandemic response time. The predictive heatmaps allow us to allocate resources with pinpoint accuracy before an outbreak peaks.",
        avatar: "/images/doctor-avatar-1.png",
        rating: 5,
        status: "Institutional Partner"
    },
    {
        name: "Marcus Thompson",
        role: "Pro Athlete & User",
        content: "The AI-predicted BP and stress monitoring are game-changers. I finally have a data-driven way to optimize my recovery and mental well-being.",
        avatar: "/images/user-avatar-1.png",
        rating: 5,
        status: "Certified User"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <div className="h-px w-8 bg-primary" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Voices of Trust</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white sm:text-5xl max-w-2xl"
                    >
                        Pioneering the Future of Global Health
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group rounded-2xl border border-white/5 bg-surface-dark/40 p-10 hover:border-primary/20 transition-all hover:bg-surface-dark/60"
                        >
                            <Quote className="absolute top-10 right-10 h-12 w-12 text-white/5 group-hover:text-primary/10 transition-colors" />

                            <div className="flex flex-col h-full gap-8">
                                <div className="flex gap-1">
                                    {[...Array(t.rating)].map((_, starI) => (
                                        <Star key={starI} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-xl text-gray-300 leading-relaxed italic">
                                    "{t.content}"
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-full border-2 border-primary/20 overflow-hidden group-hover:border-primary/50 transition-colors">
                                            <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">
                                            {t.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
