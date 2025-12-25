import { ShieldPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "py-3 bg-background-dark/80 backdrop-blur-xl border-b border-white/5"
                : "py-6 bg-transparent border-b border-transparent"
            }`}>
            <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ShieldPlus className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">HealthIntel</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">About</Link>
                    <Link to="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Technology</Link>
                    <Link to="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden sm:inline-flex text-gray-300 hover:text-white border-white/10 hover:bg-white/5 border h-9 px-4 text-sm font-medium">
                        Doctor Portal
                    </Button>
                    <Button className="bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(19,236,91,0.3)] hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(19,236,91,0.5)] transition-all h-9 px-4 text-sm">
                        User Login
                    </Button>
                </div>
            </div>
        </nav>
    );
}
