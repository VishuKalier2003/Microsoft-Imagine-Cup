import { DoctorSidebar } from "@/components/dashboard/doctor/DoctorSidebar";
import { DoctorKPIs } from "@/components/dashboard/doctor/DoctorKPIs";
import { DiseaseSpreadMap } from "@/components/dashboard/doctor/DiseaseSpreadMap";
import { RecentAlerts } from "@/components/dashboard/doctor/RecentAlerts";
import { DoctorAnalytics } from "@/components/dashboard/doctor/DoctorAnalytics";
import { Bell } from "lucide-react";
import { useSearchParams } from "react-router-dom";

// Tab Components
import { PatientList } from "@/components/dashboard/doctor/tabs/PatientList";
import { DoctorSchedule } from "@/components/dashboard/doctor/tabs/DoctorSchedule";
import { DoctorMessages } from "@/components/dashboard/doctor/tabs/DoctorMessages";
import { DoctorPreferences } from "@/components/dashboard/doctor/tabs/DoctorPreferences";

export default function DoctorDashboard() {
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "dashboard";

    const renderContent = () => {
        switch (activeTab) {
            case "patients":
                return <PatientList />;
            case "schedule":
                return <DoctorSchedule />;
            case "messages":
                return <DoctorMessages />;
            case "preferences":
                return <DoctorPreferences />;
            case "dashboard":
            default:
                return (
                    <div className="flex flex-col gap-6">
                        {/* KPI Cards */}
                        <DoctorKPIs />

                        {/* Main Content Grid (Map + Alerts) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Map Section (Spans 2 columns) */}
                            <div className="lg:col-span-2 min-h-[500px]">
                                <DiseaseSpreadMap />
                            </div>

                            {/* Alerts Feed */}
                            <div className="lg:col-span-1 min-h-[500px]">
                                <RecentAlerts />
                            </div>
                        </div>

                        {/* Charts Row */}
                        <DoctorAnalytics />
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen w-full bg-black text-white font-display overflow-hidden">
            <DoctorSidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden bg-black relative">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-8 border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-10 w-full shrink-0">
                    <h1 className="text-xl font-bold tracking-tight text-white uppercase italic">
                        {activeTab === "dashboard" ? "Recent Area Analytics - General Hospital" : activeTab.replace(/([A-Z])/g, ' $1').trim()}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="relative cursor-pointer group">
                            <Bell className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                            <span className="absolute top-0 right-0 h-2 w-2 bg-primary rounded-full"></span>
                        </div>
                        <div className="text-sm text-gray-400">Last updated: <span className="text-white font-medium">Just now</span></div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-8 scroll-smooth scrollbar-thin">
                    <div className="max-w-7xl mx-auto flex flex-col gap-6">
                        {renderContent()}
                    </div>
                </div>
            </main>
        </div>
    );
}
