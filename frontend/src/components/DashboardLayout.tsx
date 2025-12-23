import { SparklesCore } from "./ui/sparkles";

interface DashboardLayoutProps {
    children: React.ReactNode;
    type?: "user" | "doctor";
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white relative w-full overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <SparklesCore
                    id="tsparticlesdashboard"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={0.5}
                />
            </div>

            {/* Main Content */}
            <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}
