import { useAuth } from "@/context/AuthContext";
import { Link, useSearchParams } from "react-router-dom";
import {
    Users,
    Calendar,
    MessageSquare,
    Settings,
    LogOut,
    Stethoscope,
    TrendingUp,
    LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DoctorSidebar() {
    const { logout, user } = useAuth();
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "dashboard";

    const isActive = (tabId: string) => activeTab === tabId;

    const navLinks = [
        { id: "dashboard", label: "Recent Area", icon: TrendingUp, path: "/dashboard/doctor" },
        { id: "patients", label: "Patient List", icon: Users, path: "/dashboard/doctor?tab=patients" },
        { id: "schedule", label: "Schedule", icon: Calendar, path: "/dashboard/doctor?tab=schedule" },
        { id: "messages", label: "Messages", icon: MessageSquare, path: "/dashboard/doctor?tab=messages", badge: 3 },
    ];

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-black border-r border-gray-800 h-full">
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-black font-bold" />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-white tracking-tight leading-none">Sentinel</span>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">Provider Portal</span>
                </div>
            </div>

            <div className="flex flex-col gap-2 px-4 flex-1">
                {/* User Profile Snippet */}
                <div className="flex items-center gap-3 p-3 mb-6 rounded-xl bg-surface-dark border border-gray-800">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-primary shrink-0"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmEnGd_6BU6Tu-n1X4V8mgKYRp3iuKj0KMhHHOz5DbsxQyAOL0h2KmERIMNXfezSvYq07mjQJ8cSbBu2sqfeXh7Nk1aJ5UxGrqUnPsefwwczWL37gamzWUNkCH16d8QTdaxLArCbpmwdGXmi0Fa424SItEDmlJlPSPJKGwzH4YbyfWwpsXsemat7MlpUqyGxpiy8YAbNtNr2aY2roMR8aINgN1p3oRSDb-iFmZa2xFWumSkLj-_r9RPWG12wwhbo0z7bJYXkIpI84")' }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <h1 className="text-sm font-bold leading-none text-white truncate">{user?.full_name || "Dr. Smith"}</h1>
                        <p className="text-text-secondary text-[10px] font-normal mt-1 truncate">{user?.email}</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Main Menu</p>
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all border group",
                                isActive(link.id)
                                    ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_15px_rgba(19,236,91,0.05)]"
                                    : "text-text-secondary border-transparent hover:bg-surface-hover hover:text-white"
                            )}
                        >
                            <div className="relative">
                                <link.icon className={cn("w-5 h-5 transition-colors", isActive(link.id) ? "text-primary" : "group-hover:text-primary")} />
                                {link.badge && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                        {link.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm font-medium">{link.label}</p>
                        </Link>
                    ))}

                    <div className="pt-4 mt-4 border-t border-gray-800">
                        <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Institutional</p>
                        <Link
                            to="/dashboard/doctor?tab=preferences"
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all border",
                                isActive("preferences")
                                    ? "bg-primary/10 text-primary border-primary/20"
                                    : "text-text-secondary border-transparent hover:bg-surface-hover hover:text-white"
                            )}
                        >
                            <Settings className="w-5 h-5" />
                            <p className="text-sm font-medium">Preferences</p>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="p-4 border-t border-gray-800 flex flex-col gap-2">
                <Link
                    to="/dashboard/user"
                    className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold transition-all"
                >
                    <LayoutDashboard className="w-4 h-4 text-primary" />
                    <span>Switch to User Portal</span>
                </Link>
                <button
                    onClick={logout}
                    className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-surface-dark border border-gray-700 hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 text-text-secondary text-sm font-bold transition-all"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
}
