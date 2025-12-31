import { ShieldPlus, LogOut, LayoutDashboard } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { user, logout, openAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: sectionId } });
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const handleDashboard = () => {
        if (user?.role === "doctor") {
            navigate("/dashboard/doctor");
        } else {
            navigate("/dashboard/user");
        }
    };

    return (
        <>
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
                        <span className="text-xl font-bold tracking-tight text-white">Sentinel</span>
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('technology')}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
                        >
                            Technology
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {!user ? (
                            <>
                                <button
                                    onClick={() => openAuth('signup')}
                                    className="hidden sm:inline-flex text-gray-300 hover:text-white transition-colors text-sm font-medium mr-2"
                                >
                                    Sign up
                                </button>
                                <Button
                                    onClick={() => openAuth('login')}
                                    className="bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(19,236,91,0.3)] hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(19,236,91,0.5)] transition-all h-9 px-6 text-sm rounded-full"
                                >
                                    Log in
                                </Button>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Button
                                    onClick={handleDashboard}
                                    variant="ghost"
                                    className="text-gray-300 hover:text-white hover:bg-white/5 gap-2"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    <span className="hidden sm:inline">Dashboard</span>
                                </Button>
                                <Button
                                    onClick={logout}
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-400 hover:text-red-400 hover:bg-red-400/10"
                                >
                                    <LogOut className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
