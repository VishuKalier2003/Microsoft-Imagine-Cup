import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import LandingPage from "@/pages/LandingPage";
import UserDashboard from "@/pages/UserDashboard";
import DoctorDashboard from "@/pages/DoctorDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
