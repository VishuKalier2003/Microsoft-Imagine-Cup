import { Navigate, Outlet } from "react-router-dom";
import { useAuth, Role } from "@/context/AuthContext";

interface ProtectedRouteProps {
    allowedRoles?: Role[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-background text-primary">
                <div className="flex flex-col items-center gap-4">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <p className="text-sm font-medium animate-pulse">Authenticating Secure Access...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect based on role if unauthorized for specific route
        return <Navigate to={user.role === "doctor" ? "/dashboard/doctor" : "/dashboard/user"} replace />;
    }

    return <Outlet />;
}
