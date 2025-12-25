import { useAuth } from "@/context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import {
    Activity,
    Users,
    Calendar,
    MessageSquare,
    Settings,
    LogOut,
    Stethoscope,
    TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DoctorSidebar() {
    const { logout, user } = useAuth();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-black border-r border-gray-800 h-full">
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-black font-bold" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">HealthIntel</span>
            </div>

            <div className="flex flex-col gap-2 px-4 flex-1">
                {/* User Profile Snippet */}
                <div className="flex items-center gap-3 p-3 mb-6 rounded-xl bg-surface-dark border border-gray-800">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-primary shrink-0"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmEnGd_6BU6Tu-n1X4V8mgKYRp3iuKj0KMhHHOz5DbsxQyAOL0h2KmERIMNXfezSvYq07mjQJ8cSbBu2sqfeXh7Nk1aJ5UxGrqUnPsefwwczWL37gamzWUNkCH16d8QTdaxLArCbpmwdGXmi0Fa424SItEDmlJlPSPJKGwzH4YbyfWwpsXsemat7MlpUqyGxpiy8YAbNtNr2aY2roMR8aINgN1p3oRSDb-iFmZa2xFWumSkLj-_r9RPWG12wwhbo0z7bJYXkIpI84")' }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <h1 className="text-sm font-bold leading-none text-white truncate">Dr. Smith</h1>
                        <p className="text-text-secondary text-xs font-normal mt-1 truncate">Cardiology</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                    <Link
                        to="/dashboard/doctor"
                        className={cn(
                            "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors border",
                            isActive("/dashboard/doctor")
                                ? "bg-primary/10 text-primary border-primary/20"
                                : "text-text-secondary border-transparent hover:bg-surface-hover hover:text-white"
                        )}
                    >
                        <TrendingUp className="w-5 h-5" />
                        <p className="text-sm font-medium">Recent Area</p>
                    </Link>

                    <Link
                        to="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-white transition-colors group border border-transparent"
                    >
                        <Users className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <p className="text-sm font-medium">Patient List</p>
                    </Link>

                    <Link
                        to="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-white transition-colors group border border-transparent"
                    >
                        <Calendar className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <p className="text-sm font-medium">Schedule</p>
                    </Link>

                    <Link
                        to="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-white transition-colors group border border-transparent"
                    >
                        <div className="relative">
                            <MessageSquare className="w-5 h-5 group-hover:text-primary transition-colors" />
                            <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                        </div>
                        <p className="text-sm font-medium">Messages</p>
                    </Link>

                    <div className="pt-4 mt-4 border-t border-gray-800">
                        <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Settings</p>
                        <Link
                            to="#"
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-white transition-colors border border-transparent"
                        >
                            <Settings className="w-5 h-5" />
                            <p className="text-sm font-medium">Preferences</p>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="p-4 border-t border-gray-800">
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
