import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export function FinalCTA() {
    const { openAuth } = useAuth();
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full opacity-50" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Join the Evolution</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white sm:text-6xl mb-8 leading-tight"
                    >
                        Ready to Transform <br />
                        <span className="text-primary">Global Health</span> Together?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Start your journey with Sentinel today. Whether you’re an individual seeking better health or an institution aiming for global impact, the intelligence starts here.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            onClick={() => openAuth('signup')}
                            className="w-full sm:w-auto h-14 px-10 text-lg font-bold bg-primary text-black rounded-full shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all transform hover:-translate-y-1 active:scale-95 group"
                        >
                            <span>Get Started Now</span>
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <button
                            onClick={() => openAuth('signup')}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-primary pb-1"
                        >
                            Contact Sales
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
