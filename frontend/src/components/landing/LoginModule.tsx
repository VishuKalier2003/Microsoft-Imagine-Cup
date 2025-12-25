import { Mail, Lock, CheckCircle, ArrowRight, UserPlus, Stethoscope, Users } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginModule() {
    const [activeTab, setActiveTab] = useState<'user' | 'doctor'>('user');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (activeTab === 'user' && email === 'user@health.ai' && password === 'password') {
            login(email, 'user');
            navigate('/dashboard/user');
        } else if (activeTab === 'doctor' && email === 'doctor@health.ai' && password === 'password') {
            login(email, 'doctor');
            navigate('/dashboard/doctor');
        } else {
            alert("Invalid credentials. Try user@health.ai / password or doctor@health.ai / password");
        }
    };

    return (
        <section id="login-module" className="relative border-t border-white/5 bg-surface-dark/50 py-24 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px] translate-y-1/4"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">Secure Platform Access</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Log in to your dashboard to view real-time health data or register a new account to join the global health intelligence network.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start max-w-6xl mx-auto">
                    {/* Login Form */}
                    <div className="w-full rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-emerald-500/50 to-primary/50"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                <h3 className="text-2xl font-bold text-white">Sign In</h3>
                                <div className="flex items-center bg-surface-dark border border-white/10 rounded-lg p-1 self-start sm:self-auto">
                                    <button
                                        onClick={() => setActiveTab('user')}
                                        className={`px-4 py-1.5 rounded-[0.25rem] text-xs font-bold shadow-sm transition-all ${activeTab === 'user' ? 'bg-primary text-black hover:bg-primary/90' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        User
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('doctor')}
                                        className={`px-4 py-1.5 rounded-[0.25rem] text-xs font-bold shadow-sm transition-all ${activeTab === 'doctor' ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        Doctor
                                    </button>
                                </div>
                            </div>

                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Email or Health ID</label>
                                    <div className="relative group/input">
                                        <Mail className="absolute left-3 top-3.5 text-gray-500 w-5 h-5 group-focus-within/input:text-primary transition-colors" />
                                        <input
                                            type="email"
                                            className="w-full rounded-lg bg-surface-dark border border-white/10 pl-10 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 text-sm focus:outline-none"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-sm font-medium text-gray-300">Password</label>
                                        <a href="#" className="text-xs text-primary hover:text-primary/80 font-medium">Forgot password?</a>
                                    </div>
                                    <div className="relative group/input">
                                        <Lock className="absolute left-3 top-3.5 text-gray-500 w-5 h-5 group-focus-within/input:text-primary transition-colors" />
                                        <input
                                            type="password"
                                            className="w-full rounded-lg bg-surface-dark border border-white/10 pl-10 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 text-sm focus:outline-none"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center ml-1">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-white/20 bg-surface-dark text-primary focus:ring-primary/50 focus:ring-offset-0 focus:outline-none"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400 select-none">Remember me for 30 days</label>
                                </div>

                                <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(19,236,91,0.2)] hover:shadow-[0_0_30px_rgba(19,236,91,0.4)] hover:bg-primary/90 transition-all transform hover:-translate-y-0.5">
                                    <span>Access Dashboard</span>
                                    <ArrowRight className="w-[18px] h-[18px]" />
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-gray-500">
                                <CheckCircle className="w-4 h-4" />
                                <span>Encrypted & HIPAA Compliant</span>
                            </div>
                        </div>
                    </div>

                    {/* Join Network */}
                    <div className="flex flex-col justify-center h-full pt-4 lg:pt-8">
                        <div className="mb-10 pl-2">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-dark border border-white/10 text-primary mb-6 shadow-lg shadow-black/50">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Join the Network</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                New to HealthIntel? Create an account to synchronize your health devices, access predictive analytics, and contribute to global health intelligence.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="#" className="group relative overflow-hidden flex items-center gap-5 rounded-xl border border-white/10 bg-surface-dark/40 p-5 hover:bg-surface-dark hover:border-primary/40 transition-all hover:shadow-lg">
                                <div className="absolute left-0 top-0 h-full w-1 bg-primary scale-y-0 transition-transform group-hover:scale-y-100"></div>
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-300 group-hover:bg-primary group-hover:text-black transition-all">
                                    <UserPlus className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white text-lg">User Registration</span>
                                    </div>
                                    <div className="text-sm text-gray-500 group-hover:text-gray-400">Track vitals & view personal trends</div>
                                </div>
                                <ArrowRight className="text-gray-600 group-hover:text-primary transition-colors group-hover:translate-x-1" />
                            </a>

                            <a href="#" className="group relative overflow-hidden flex items-center gap-5 rounded-xl border border-white/10 bg-surface-dark/40 p-5 hover:bg-surface-dark hover:border-emerald-500/40 transition-all hover:shadow-lg">
                                <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 transition-transform group-hover:scale-y-100"></div>
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-300 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-white text-lg">Doctor Registration</span>
                                    </div>
                                    <div className="text-sm text-gray-500 group-hover:text-gray-400">Access institution analytics</div>
                                </div>
                                <ArrowRight className="text-gray-600 group-hover:text-emerald-500 transition-colors group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
