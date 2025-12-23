import { Link, useLocation, useNavigate } from "react-router-dom";
import { Activity, Map as MapIcon, LayoutDashboard, Stethoscope, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface DashboardLayoutProps {
    children: React.ReactNode;
    type?: "user" | "doctor";
}

export default function DashboardLayout({ children, type = "user" }: DashboardLayoutProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navItems = [
        { name: "Feed", icon: LayoutDashboard, path: type === "user" ? "/dashboard" : "/doctor" },
        { name: "Global Map", icon: MapIcon, path: "/map" },
        { name: "Analysis", icon: Activity, path: "#" },
        { name: "Consult", icon: Stethoscope, path: "#" },
    ];

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-zinc-950/50 backdrop-blur-3xl flex flex-col">
                <div className="p-6">
                    <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm">H</div>
                        HEALTH.AI
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${location.pathname === item.path
                                ? "bg-white text-black"
                                : "text-zinc-500 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon size={18} />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5 space-y-2">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-medium">
                        <Settings size={18} />
                        Settings
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all text-sm font-medium"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative">
                <div className="absolute top-0 right-0 p-8 flex items-center gap-4 z-20">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-white">{user?.email || "Alex Johnson"}</p>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{user?.role === "doctor" ? "Specialist" : "Patient"}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden flex items-center justify-center bg-zinc-900">
                        <img src={`https://i.pravatar.cc/100?u=${user?.role}`} alt="avatar" />
                    </div>
                </div>
                <div className="p-8 pb-20">
                    {children}
                </div>
            </main>
        </div>
    );
}
