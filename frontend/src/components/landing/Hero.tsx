import { Globe } from "@/components/ui/globe";
import { Search, ArrowRight, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.8], [0, 50]);
    const globeOpacity = useTransform(scrollYProgress, [0, 0.7], [0.8, 0]);

    return (
        <section ref={containerRef} className="relative px-6 pt-20 pb-12 sm:pt-32 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
            {/* Background Globe Wrapper */}
            <motion.div
                style={{ opacity: globeOpacity }}
                className="absolute inset-0 z-0 h-full w-full pointer-events-none"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/30 to-background-dark z-10 pointer-events-none"></div>
                <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
                    <Globe className="relative w-[1200px] max-w-[1200px] pointer-events-auto" />
                </div>
                <div className="absolute top-1/4 left-1/4 w-3 h-3 animate-ping rounded-full bg-primary/80 z-20"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 animate-ping rounded-full bg-primary/60 delay-300 z-20"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 animate-ping rounded-full bg-primary/40 delay-700 z-20"></div>
            </motion.div>

            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
            >

                <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm shadow-lg shadow-primary/5">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    Live Global Tracking Active
                </div>

                <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl max-w-5xl drop-shadow-2xl">
                    Global Health <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Intelligence Platform</span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl drop-shadow-lg">
                    Advanced real-time tracking and predictive analysis for healthcare providers and patients worldwide. Access secure, synchronized health data anywhere.
                </p>

                <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <div className="flex h-14 w-full max-w-lg items-center rounded-xl border border-white/10 bg-surface-glass px-4 backdrop-blur-md transition-all focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 shadow-2xl">
                        <Search className="text-gray-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            className="h-full flex-1 bg-transparent border-none p-0 text-base text-white placeholder-gray-400 focus:ring-0 focus:outline-none bg-none"
                            placeholder="Search region or healthcare facility..."
                        />
                        <button className="rounded-lg bg-primary/10 p-2 text-primary hover:bg-primary hover:text-black transition-colors">
                            <ArrowRight className="w-[20px] h-[20px]" />
                        </button>
                    </div>
                </div>

                <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-2">
                        <CheckCircle className="text-primary w-[18px] h-[18px]" />
                        HIPAA Compliant
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle className="text-primary w-[18px] h-[18px]" />
                        End-to-End Encrypted
                    </span>
                </div>
            </motion.div>
        </section>
    );
}
