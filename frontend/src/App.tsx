import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import LandingPage from "@/pages/LandingPage";
import UserDashboard from "@/pages/UserDashboard";
import DoctorDashboard from "@/pages/DoctorDashboard";
import { AuthModal } from "@/components/landing/AuthModal";

function AppContent() {
  const { isAuthModalOpen, closeAuth, authMode } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={["user", "doctor"]} />}>
          <Route path="/dashboard/user" element={<UserDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["doctor"]} />}>
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        </Route>
      </Routes>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuth}
        initialMode={authMode}
      />
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
