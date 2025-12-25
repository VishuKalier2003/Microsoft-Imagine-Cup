import { Sidebar } from "@/components/dashboard/Sidebar";
import { VitalsGrid } from "@/components/dashboard/VitalsGrid";
import { AnalysisSection } from "@/components/dashboard/AnalysisSection";
import { ActionPanel } from "@/components/dashboard/ActionPanel";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "react-router-dom";

// Tab Components
import { VitalsHistory } from "@/components/dashboard/tabs/VitalsHistory";
import { RegionalMapDetail } from "@/components/dashboard/tabs/RegionalMapDetail";
import { Appointments } from "@/components/dashboard/tabs/Appointments";
import { Prescriptions } from "@/components/dashboard/tabs/Prescriptions";
import { Devices } from "@/components/dashboard/tabs/Devices";
import { Preferences } from "@/components/dashboard/tabs/Preferences";

export default function UserDashboard() {
    const { user } = useAuth();
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "dashboard";

    const renderContent = () => {
        switch (activeTab) {
            case "vitals":
                return <VitalsHistory />;
            case "map":
                return <RegionalMapDetail />;
            case "appointments":
                return <Appointments />;
            case "prescriptions":
                return <Prescriptions />;
            case "devices":
                return <Devices />;
            case "preferences":
                return <Preferences />;
            case "dashboard":
            default:
                return (
                    <>
                        {/* Vitals Grid */}
                        <VitalsGrid />

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                            {/* Left Column (Span 3) */}
                            <div className="col-span-1 lg:col-span-3">
                                <AnalysisSection />
                            </div>

                            {/* Right Column (Span 1) */}
                            <div className="col-span-1">
                                <ActionPanel />
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="flex bg-background-dark min-h-screen w-full overflow-hidden text-foreground font-display">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-black p-4 lg:p-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-8">

                    {/* Header */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-white uppercase italic">
                                {activeTab === "dashboard" ? `Welcome back, ${user?.email ? "User" : "Alex"}` : activeTab.replace(/([A-Z])/g, ' $1').trim()}
                            </h1>
                            <p className="text-gray-400 mt-1">
                                {activeTab === "dashboard"
                                    ? "Here is your daily health intelligence report."
                                    : `Manage your ${activeTab} and health records.`}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-[#121212] px-4 py-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <span className="text-sm font-medium text-gray-300">Device Connected</span>
                            </div>
                        </div>
                    </div>

                    {renderContent()}

                </div>
            </main>
        </div>
    );
}
