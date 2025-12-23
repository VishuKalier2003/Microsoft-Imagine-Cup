"use client";
import { Activity, Brain, ShieldCheck, Heart, Apple } from "lucide-react";
import type { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "Initial Assessment",
        date: "Day 1",
        content: "Comprehensive analysis of vitals and historical health markers to set your medical baseline.",
        category: "Assessment",
        icon: Activity,
        relatedIds: [2],
        status: "completed",
        energy: 100,
    },
    {
        id: 2,
        title: "AI Engine Training",
        date: "Day 3",
        content: "Our neural networks process your unique data points to build a personalized monitoring model.",
        category: "Processing",
        icon: Brain,
        relatedIds: [1, 3],
        status: "completed",
        energy: 95,
    },
    {
        id: 3,
        title: "Real-time Monitoring",
        date: "Ongoing",
        content: "24/7 scanning of physiological signals to detect micro-variations and potential risks.",
        category: "Monitoring",
        icon: Heart,
        relatedIds: [2, 4],
        status: "in-progress",
        energy: 85,
    },
    {
        id: 4,
        title: "Lifestyle Optimization",
        date: "Weekly",
        content: "AI-generated recommendations for nutrition and activity based on current physiological state.",
        category: "Wellness",
        icon: Apple,
        relatedIds: [3, 5],
        status: "pending",
        energy: 40,
    },
    {
        id: 5,
        title: "Predictive Security",
        date: "Continuous",
        content: "Advanced encryption protocols protecting your biological data integrity.",
        category: "Security",
        icon: ShieldCheck,
        relatedIds: [4],
        status: "pending",
        energy: 20,
    },
];

export function TimelineSection() {
    return (
        <section className="section-padding" style={{ background: '#000', position: 'relative' }}>
            <div className="container">
                <div className="text-center mb-16">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Health Journey</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>Interactive orbital roadmap of your AI-powered wellness transformation.</p>
                </div>
                <div style={{ borderRadius: '2rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <RadialOrbitalTimeline timelineData={timelineData} />
                </div>
            </div>
        </section>
    );
}
