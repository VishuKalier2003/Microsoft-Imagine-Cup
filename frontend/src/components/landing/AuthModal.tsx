import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
    const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
    const [role, setRole] = useState<'user' | 'doctor'>('user');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();

        if (mode === 'signup') {
            login(email, fullName || (role === 'doctor' ? 'New Practitioner' : 'New Sentinel User'), role);
            navigate(role === 'doctor' ? '/dashboard/doctor' : '/dashboard/user');
            onClose();
            return;
        }

        // Mock authentication logic
        if (role === 'user' && email === 'user@health.ai' && password === 'password') {
            login(email, 'Alex User', 'user');
            navigate('/dashboard/user');
            onClose();
        } else if (role === 'doctor' && email === 'doctor@health.ai' && password === 'password') {
            login(email, 'Dr. Smith', 'doctor');
            navigate('/dashboard/doctor');
            onClose();
        } else {
            alert("For demo purposes, use: user@health.ai / password or doctor@health.ai / password. Or create a new account in 'Sign Up' mode.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl"
                    >
                        {/* Top Gradient Bar */}
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-emerald-500 to-primary" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-2">
                                {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="text-sm text-gray-400">
                                {role === 'user' ? 'Access your personal health intelligence' : 'Secure institutional access'}
                            </p>
                        </div>

                        {/* Tabs for Login/Signup */}
                        <div className="mb-8 flex rounded-lg bg-surface-dark p-1 border border-white/5">
                            <button
                                onClick={() => setMode('login')}
                                className={`flex-1 rounded-md py-2 text-sm font-bold transition-all ${mode === 'login' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => setMode('signup')}
                                className={`flex-1 rounded-md py-2 text-sm font-bold transition-all ${mode === 'signup' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                            >
                                Sign Up
                            </button>
                        </div>

                        <form onSubmit={handleAuth} className="space-y-5">
                            {mode === 'signup' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="space-y-2 overflow-hidden"
                                >
                                    <div className="relative group">
                                        <Users className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="text"
                                            required
                                            className="w-full rounded-lg bg-surface-dark border border-white/10 pl-10 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 text-sm outline-none"
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                </motion.div>
                            )}
                            <div className="space-y-2">
                                <div className="relative group">
                                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        className="w-full rounded-lg bg-surface-dark border border-white/10 pl-10 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 text-sm outline-none"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="relative group">
                                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="password"
                                        required
                                        className="w-full rounded-lg bg-surface-dark border border-white/10 pl-10 pr-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 text-sm outline-none"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {mode === 'login' && (
                                    <div className="flex justify-end pr-1">
                                        <a href="#" className="text-xs text-primary hover:underline font-medium">Forgot password?</a>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-bold text-black shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
                            >
                                <span>{mode === 'login' ? 'Enter Dashboard' : 'Create Account'}</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>

                        {/* Footer Options */}
                        <div className="mt-8 flex flex-col items-center gap-4">
                            {role === 'user' ? (
                                <button
                                    onClick={() => setRole('doctor')}
                                    className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-emerald-500 transition-colors"
                                >
                                    <Stethoscope className="h-3.5 w-3.5" />
                                    <span>Login as Doctor</span>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setRole('user')}
                                    className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-primary transition-colors"
                                >
                                    <Users className="h-3.5 w-3.5" />
                                    <span>Login as User</span>
                                </button>
                            )}

                            <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                                <ShieldCheck className="h-3 w-3" />
                                <span>Secured by End-to-End Encryption</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

const Users = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className={className}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
