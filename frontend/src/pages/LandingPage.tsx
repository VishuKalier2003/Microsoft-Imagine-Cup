import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const sectionId = (location.state as any).scrollTo;
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <ProductShowcase />
                <Testimonials />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
