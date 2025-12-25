import { Radar, LineChart, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: Radar,
        title: "Real-time Tracking",
        description: "Monitor patient vitals and disease spread vectors in real-time with sub-second latency updates across the global network.",
    },
    {
        icon: LineChart,
        title: "Predictive Analysis",
        description: "AI-driven forecasts that help institutions allocate resources effectively before outbreaks peak, ensuring prepared responses.",
    },
    {
        icon: ShieldCheck,
        title: "Data Privacy",
        description: "End-to-end encryption compliant with HIPAA and GDPR, ensuring sensitive medical data remains secure at all times.",
    }
];

export function Features() {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
            <div className="grid gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface-dark/50 p-8 transition-all hover:bg-surface-dark hover:border-primary/30 hover:-translate-y-1">
                        <div className="absolute -right-4 -top-4 size-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10"></div>
                        <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <feature.icon className="w-8 h-8" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                        <p className="text-base leading-relaxed text-gray-400">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
