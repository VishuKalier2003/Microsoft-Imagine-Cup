import { useAuth } from "@/context/AuthContext";
import { Link, useSearchParams } from "react-router-dom";
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
import { motion } from "framer-motion";

export function Sidebar() {
    const { logout, user } = useAuth();
    const [searchParams] = useSearchParams();

    const activeTab = searchParams.get("tab") || "dashboard";

    const isActive = (tabId: string) => activeTab === tabId;

    const navLinks = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard/user" },
        { id: "vitals", label: "Vitals History", icon: Activity, path: "/dashboard/user?tab=vitals" },
        { id: "map", label: "Regional Map", icon: MapIcon, path: "/dashboard/user?tab=map" },
        { id: "appointments", label: "Appointments", icon: Calendar, path: "/dashboard/user?tab=appointments", badge: 2 },
        { id: "prescriptions", label: "Prescriptions", icon: Pill, path: "/dashboard/user?tab=prescriptions" },
    ];

    const settingsLinks = [
        { id: "devices", label: "Devices", icon: Watch, path: "/dashboard/user?tab=devices" },
        { id: "preferences", label: "Preferences", icon: Settings, path: "/dashboard/user?tab=preferences" },
    ];

    return (
        <aside className="hidden w-72 flex-col border-r border-white/5 bg-[#0D0D0D] lg:flex h-screen sticky top-0">
            <div className="flex h-20 items-center gap-3 px-6 border-b border-white/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(19,236,91,0.1)]">
                    <Stethoscope className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight text-white leading-none">Sentinel</span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Health Intelligence</span>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6 scrollbar-hide">
                {/* User Identity Card */}
                <div className="mb-6 group relative rounded-2xl border border-white/10 bg-[#121212] p-4 hover:border-primary/30 transition-all cursor-pointer overflow-hidden shadow-2xl">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 blur-2xl rounded-full" />

                    <div className="flex items-center gap-3 relative z-10">
                        <div
                            className="h-11 w-11 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/20 shadow-lg group-hover:border-primary/50 transition-all"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUWHngVrSBjJNADTxwRaBrhYyXsHgRSJXwLSsY2iZsAZUQjQz-28BcJN-weSt7OWGke7Y8Wq0KIS6UWHk6xXTiHYIaAdYHtpdXGDm4GaCpbfdSsF2C9AXB5QxCS5riFEdttPhxTmvBJKriDq8BEMTrDFrEhe16i86nE9X79DvovGBzCCTlsVyiuQUQD02q--i8hAOc2lZiZRm_wIXwh5XtLKA5S-j3hRMwFPQEJEHJvYUunmT9otli9L6gXIBjjXUZ5HZ8jn5pgD0')" }}
                        ></div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="truncate text-sm font-bold text-white group-hover:text-primary transition-colors">{user?.full_name || "Alex Morgan"}</span>
                            <span className="truncate text-[10px] text-gray-500 font-medium group-hover:text-gray-400 transition-colors uppercase tracking-tighter">{user?.email}</span>
                        </div>
                    </div>
                </div>

                <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Workspace</p>

                <div className="space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="block"
                        >
                            <motion.div
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "flex items-center justify-between rounded-xl px-4 py-3 transition-all border group",
                                    isActive(link.id)
                                        ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_20px_rgba(19,236,91,0.05)]"
                                        : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <link.icon className={cn("w-5 h-5 transition-colors", isActive(link.id) ? "text-primary" : "group-hover:text-primary")} />
                                    <span className="text-sm font-bold uppercase tracking-wide">{link.label}</span>
                                </div>
                                {link.badge && (
                                    <span className="bg-primary text-black text-[10px] font-black px-1.5 py-0.5 rounded-md shadow-[0_0_10px_rgba(19,236,91,0.3)]">
                                        {link.badge}
                                    </span>
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <p className="mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Management</p>

                <div className="space-y-1">
                    {settingsLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="block"
                        >
                            <motion.div
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all border group",
                                    isActive(link.id)
                                        ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_20px_rgba(19,236,91,0.05)]"
                                        : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <link.icon className={cn("w-5 h-5 transition-colors", isActive(link.id) ? "text-primary" : "group-hover:text-primary")} />
                                <span className="text-sm font-bold uppercase tracking-wide">{link.label}</span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/5 p-4 flex flex-col gap-3 bg-[#0a0a0a]">
                {user?.role === 'doctor' && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            to="/dashboard/doctor"
                            className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 bg-primary text-black hover:bg-primary/90 transition-all shadow-[0_4px_15px_rgba(19,236,91,0.2)]"
                        >
                            <Stethoscope className="w-4 h-4" />
                            <span className="text-xs font-black uppercase tracking-wider">Return to Provider Portal</span>
                        </Link>
                    </motion.div>
                )}
                <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-all group font-bold text-sm uppercase tracking-widest border border-transparent hover:border-red-500/20"
                >
                    <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
}
