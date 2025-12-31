import React, { createContext, useContext, useState, useEffect } from "react";

export type Role = "user" | "doctor" | null;

interface User {
    email: string;
    full_name: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, full_name: string, role: Role) => void;
    logout: () => void;
    isLoading: boolean;
    isAuthModalOpen: boolean;
    authMode: 'login' | 'signup';
    openAuth: (mode: 'login' | 'signup') => void;
    closeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    useEffect(() => {
        // Load user from localStorage
        const savedUser = localStorage.getItem("health_ai_user_new");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const openAuth = (mode: 'login' | 'signup') => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    const closeAuth = () => {
        setIsAuthModalOpen(false);
    };

    const login = (email: string, full_name: string, role: Role) => {
        const newUser = { email, full_name, role };
        setUser(newUser);
        localStorage.setItem("health_ai_user_new", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("health_ai_user_new");
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isLoading,
            isAuthModalOpen,
            authMode,
            openAuth,
            closeAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
