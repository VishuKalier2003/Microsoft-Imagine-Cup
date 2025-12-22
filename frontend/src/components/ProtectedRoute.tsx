import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth, type Role } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: Role[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        // Redirect to login but save the current location they were trying to go to
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // If user is logged in but doesn't have the right role
        // Redirect to their default dashboard
        return <Navigate to={user.role === "doctor" ? "/doctor" : "/dashboard"} replace />;
    }

    return <>{children}</>;
}
