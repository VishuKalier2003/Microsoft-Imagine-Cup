import { useAuth } from "@/context/AuthContext";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
    LayoutDashboard,
    Activity,
    Map as MapIcon,
    Calendar,
    Pill,
    Watch,
    Settings,
    LogOut,
    Stethoscope
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const { logout, user } = useAuth();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const activeTab = searchParams.get("tab") || "dashboard";

    const isActive = (tabId: string) => activeTab === tabId;

    const navLinks = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard/user" },
        { id: "vitals", label: "Vitals History", icon: Activity, path: "/dashboard/user?tab=vitals" },
        { id: "map", label: "Regional Map", icon: MapIcon, path: "/dashboard/user?tab=map" },
        { id: "appointments", label: "Appointments", icon: Calendar, path: "/dashboard/user?tab=appointments" },
        { id: "prescriptions", label: "Prescriptions", icon: Pill, path: "/dashboard/user?tab=prescriptions" },
    ];

    const settingsLinks = [
        { id: "devices", label: "Devices", icon: Watch, path: "/dashboard/user?tab=devices" },
        { id: "preferences", label: "Preferences", icon: Settings, path: "/dashboard/user?tab=preferences" },
    ];

    return (
        <aside className="hidden w-72 flex-col border-r border-white/5 bg-[#121212] lg:flex">
            <div className="flex h-20 items-center gap-3 px-6 border-b border-white/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Stethoscope className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight text-white">HealthIntel</span>
                    <span className="text-xs text-gray-400">User Portal</span>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6">
                <div className="mb-6 flex items-center gap-3 rounded-lg border border-white/5 bg-[#0a0a0a] p-3">
                    <div
                        className="h-10 w-10 rounded-full bg-cover bg-center shrink-0"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUWHngVrSBjJNADTxwRaBrhYyXsHgRSJXwLSsY2iZsAZUQjQz-28BcJN-weSt7OWGke7Y8Wq0KIS6UWHk6xXTiHYIaAdYHtpdXGDm4GaCpbfdSsF2C9AXB5QxCS5riFEdttPhxTmvBJKriDq8BEMTrDFrEhe16i86nE9X79DvovGBzCCTlsVyiuQUQD02q--i8hAOc2lZiZRm_wIXwh5XtLKA5S-j3hRMwFPQEJEHJvYUunmT9otli9L6gXIBjjXUZ5HZ8jn5pgD0')" }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="truncate text-sm font-medium text-white">{user?.email || "Alex Morgan"}</span>
                        <span className="truncate text-xs text-primary">Premium Member</span>
                    </div>
                </div>

                <p className="px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Menu</p>

                {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.path}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
                            isActive(link.id) ? "bg-primary/10 text-primary" : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                        )}
                    >
                        <link.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                ))}

                <p className="mt-6 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Settings</p>

                {settingsLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.path}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
                            isActive(link.id) ? "bg-primary/10 text-primary" : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                        )}
                    >
                        <link.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                ))}
            </div>

            <div className="border-t border-white/5 p-4">
                <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Log Out</span>
                </button>
            </div>
        </aside>
    );
}
