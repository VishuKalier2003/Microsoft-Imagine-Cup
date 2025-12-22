"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { type LucideIcon, UserCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
    role?: "user" | "doctor" | "both"
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const location = useLocation()
    const { user, logout } = useAuth()
    const isLoggedIn = !!user

    // Sync active tab with location
    useEffect(() => {
        const current = items.find(item => item.url === location.pathname)
        if (current) setActiveTab(current.name)
    }, [location.pathname, items])

    // Filter items based on auth state and role
    const visibleItems = items.filter(item => {
        if (!item.role || item.role === "both") return true;
        if (!isLoggedIn) return false;
        if (item.role === "user" && (user?.role === "user" || user?.role === "doctor")) return true;
        if (item.role === "doctor" && user?.role === "doctor") return true;
        return false;
    });

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] flex justify-center items-center px-6 pt-6 pointer-events-none",
                className,
            )}
        >
            <div className="flex items-center gap-3 bg-zinc-950/20 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-2xl pointer-events-auto">
                {visibleItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            to={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                "text-zinc-400 hover:text-white",
                                isActive && "text-white",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-blue-500/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-blue-500/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-blue-500/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>

            {/* Floating Sign-In / Profile */}
            <div className="absolute right-6 top-6 sm:top-6 pointer-events-auto flex items-center gap-3">
                {isLoggedIn ? (
                    <>
                        <button
                            onClick={() => logout()}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold hover:bg-white/10 hover:text-white transition-all"
                        >
                            Logout
                        </button>
                        <Link to={user?.role === "doctor" ? "/doctor" : "/dashboard"} className="block">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shadow-lg bg-zinc-900 flex items-center justify-center text-zinc-400"
                            >
                                <UserCircle size={24} />
                            </motion.div>
                        </Link>
                    </>
                ) : (
                    <Link to="/auth">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold shadow-lg hover:bg-zinc-200 transition-colors"
                        >
                            Sign In
                        </motion.button>
                    </Link>
                )}
            </div>
        </div>
    )
}
