import { Bug, Users, Pill, TrendingUp, AlertTriangle } from "lucide-react";

export function DoctorKPIs() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Active Outbreaks */}
            <div className="flex flex-col gap-1 p-5 rounded-xl bg-surface-dark border border-gray-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Bug className="w-16 h-16 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    <p className="text-text-secondary text-sm font-medium">Active Outbreaks</p>
                </div>
                <div className="flex items-baseline gap-3 mt-2">
                    <p className="text-3xl font-bold text-white">3</p>
                    <span className="flex items-center text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" />
                        +12%
                    </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">Zone B, Zone D, North Ward</p>
            </div>

            {/* Card 2: Total Cases */}
            <div className="flex flex-col gap-1 p-5 rounded-xl bg-surface-dark border border-gray-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-16 h-16 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <p className="text-text-secondary text-sm font-medium">Total Cases (Week)</p>
                </div>
                <div className="flex items-baseline gap-3 mt-2">
                    <p className="text-3xl font-bold text-white">1,245</p>
                    <span className="flex items-center text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" />
                        +5%
                    </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">Vs. 1,180 last week</p>
            </div>

            {/* Card 3: Top Prescribed Med */}
            <div className="flex flex-col gap-1 p-5 rounded-xl bg-surface-dark border border-gray-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Pill className="w-16 h-16 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                    <Pill className="w-4 h-4 text-primary" />
                    <p className="text-text-secondary text-sm font-medium">Top Prescribed Med</p>
                </div>
                <div className="flex items-baseline gap-3 mt-2">
                    <p className="text-2xl font-bold text-white uppercase tracking-tight">Amoxicillin</p>
                    <span className="flex items-center text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 mr-1" />
                        +2%
                    </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">Shortage risk: Low</p>
            </div>
        </div>
    );
}
