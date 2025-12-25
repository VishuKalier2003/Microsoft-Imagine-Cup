import { Heart, Droplets, Activity, Moon, Zap } from "lucide-react";

export function VitalsGrid() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {/* Heart Rate */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-5 transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Heart className="text-primary w-5 h-5" />
                        <span className="text-sm font-medium text-gray-300">Heart Rate</span>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">72</span>
                    <span className="text-sm font-medium text-gray-500">BPM</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-primary"></div>
                </div>
                <p className="mt-2 text-xs text-primary">+ Normal Range</p>
            </div>

            {/* SpO2 */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-5 transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Droplets className="text-blue-400 w-5 h-5" />
                        <span className="text-sm font-medium text-gray-300">SpO2</span>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">98</span>
                    <span className="text-sm font-medium text-gray-500">%</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div className="h-full w-[98%] rounded-full bg-blue-400"></div>
                </div>
                <p className="mt-2 text-xs text-primary">+ Stable</p>
            </div>

            {/* Pressure (AI Predicted) */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-5 transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Activity className="text-yellow-500 w-5 h-5" />
                        <span className="text-sm font-medium text-gray-300">Pressure</span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                        PTT Estimate
                    </span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">120/80</span>
                    <span className="text-sm font-medium text-gray-500">mmHg</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div className="h-full w-[60%] rounded-full bg-yellow-500"></div>
                </div>
                <p className="mt-2 text-xs text-yellow-500">~ Slightly Elevated</p>
            </div>

            {/* Stress Level (New) */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-5 transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Zap className="text-orange-400 w-5 h-5" />
                        <span className="text-sm font-medium text-gray-300">Stress</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">HRV Derived</span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">32</span>
                    <span className="text-sm font-medium text-gray-500">%</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div className="h-full w-[32%] rounded-full bg-orange-400"></div>
                </div>
                <p className="mt-2 text-xs text-primary">+ Low Stress</p>
            </div>

            {/* Sleep */}
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-5 transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Moon className="text-purple-400 w-5 h-5" />
                        <span className="text-sm font-medium text-gray-300">Sleep</span>
                    </div>
                    <span className="text-xs text-gray-500">Last Night</span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">6h 45m</span>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div className="h-full w-[75%] rounded-full bg-purple-400"></div>
                </div>
                <p className="mt-2 text-xs text-red-500">-15m vs Goal</p>
            </div>
        </div>
    );
}
