import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import MapPage from './pages/MapPage';
import UserDashboard from './pages/UserDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import { Home, Map as MapIcon, LayoutDashboard, Stethoscope } from 'lucide-react';
import { NavBar } from './components/ui/tubelight-navbar';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/global.css';

const navItems = [
  { name: 'Home', url: '/', icon: Home, role: 'both' as const },
  { name: 'Global Map', url: '/map', icon: MapIcon, role: 'both' as const },
  { name: 'Dashboard', url: '/dashboard', icon: LayoutDashboard, role: 'user' as const },
  { name: 'Specialist', url: '/doctor', icon: Stethoscope, role: 'doctor' as const }
];

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar items={navItems} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/map" element={<MapPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["user", "doctor"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor"
            element={
              <ProtectedRoute allowedRoles={["doctor"]}>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
