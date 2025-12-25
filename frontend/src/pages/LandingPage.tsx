import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { LoginModule } from "@/components/landing/LoginModule";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <LoginModule />
            </main>
            <Footer />
        </div>
    );
}
