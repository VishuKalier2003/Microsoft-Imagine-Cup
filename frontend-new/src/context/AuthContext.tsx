import React, { createContext, useContext, useState, useEffect } from "react";

export type Role = "user" | "doctor" | null;

interface User {
    email: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, role: Role) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load user from localStorage
        const savedUser = localStorage.getItem("health_ai_user_new");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, role: Role) => {
        const newUser = { email, role };
        setUser(newUser);
        localStorage.setItem("health_ai_user_new", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("health_ai_user_new");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
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
