"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock, User, Github } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth, type Role } from "@/context/AuthContext";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from = location.state?.from?.pathname || "/dashboard";

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Test Credentials Logic
        if (email === "user@health.ai" && password === "password") {
            login(email, "user");
            navigate(from, { replace: true });
        } else if (email === "doctor@health.ai" && password === "password") {
            login(email, "doctor");
            navigate(userRoleTarget("doctor"), { replace: true });
        } else {
            setError("Invalid test credentials. Use user@health.ai or doctor@health.ai");
        }
    };

    const userRoleTarget = (role: Role) => {
        if (role === 'doctor') return "/doctor";
        return from;
    }

    const autofill = (type: "user" | "doctor") => {
        setEmail(type === "user" ? "user@health.ai" : "doctor@health.ai");
        setPassword("password");
        setError("");
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md z-10"
            >
                <Card className="bg-zinc-900/50 backdrop-blur-2xl border-white/10 shadow-2xl overflow-hidden">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                            <span className="text-blue-400 font-bold text-lg">H</span>
                        </div>
                        <CardTitle className="text-3xl font-bold tracking-tight text-white">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </CardTitle>
                        <CardDescription className="text-zinc-400">
                            {isLogin
                                ? "Enter your credentials to access your health suite"
                                : "Join the future of AI-powered health monitoring"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6">
                        <form onSubmit={handleAuth} className="space-y-4">
                            {error && (
                                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center font-medium">
                                    {error}
                                </div>
                            )}

                            {!isLogin && (
                                <div className="space-y-2">
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-10 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-10 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-10 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 py-6 rounded-xl transition-all font-semibold flex items-center justify-center group">
                                {isLogin ? "Login" : "Sign Up"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>

                        <div className="mt-8 text-center space-y-4">
                            {isLogin && (
                                <div className="grid grid-cols-2 gap-3 pb-2">
                                    <button
                                        onClick={() => autofill("user")}
                                        className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-blue-400 border border-white/5 py-2 rounded-lg hover:border-blue-500/30 transition-all"
                                    >
                                        Test User
                                    </button>
                                    <button
                                        onClick={() => autofill("doctor")}
                                        className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-purple-400 border border-white/5 py-2 rounded-lg hover:border-purple-500/30 transition-all"
                                    >
                                        Test Doctor
                                    </button>
                                </div>
                            )}

                            <p className="text-zinc-500 text-sm">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-white hover:text-blue-400 transition-colors font-medium"
                                >
                                    {isLogin ? "Create Account" : "Sign In"}
                                </button>
                            </p>

                            <div className="flex items-center gap-4 py-2">
                                <div className="h-px w-full bg-white/5"></div>
                                <span className="text-zinc-700 text-xs font-medium uppercase tracking-widest">or</span>
                                <div className="h-px w-full bg-white/5"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <button className="flex items-center justify-center gap-3 bg-black/40 border border-white/10 py-2.5 rounded-xl text-white hover:bg-white/5 transition-all text-sm font-medium">
                                    <Github className="h-4 w-4" />
                                    Continue with GitHub
                                </button>
                            </div>

                            <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-2">
                                <p className="text-zinc-600 text-xs">Healthcare Professional?</p>
                                <Link
                                    to="/doctor"
                                    className="text-blue-500 hover:text-blue-400 text-xs font-semibold underline underline-offset-4 transition-all"
                                >
                                    Sign in as Doctor
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
