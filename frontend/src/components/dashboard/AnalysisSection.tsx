import { useRef } from "react";
import { AlertTriangle, CheckCircle, Navigation, Info, Plus, Minus } from "lucide-react";
import { InteractiveMap, InteractiveMapRef } from "@/components/dashboard/InteractiveMap";

export function AnalysisSection() {
    const mapRef = useRef<InteractiveMapRef>(null);

    return (
        <div className="flex flex-col gap-6 h-full">
            {/* AI Health Analysis */}
            <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-white">AI Health Analysis</h2>
                        <p className="text-sm text-gray-400">Based on your recent 24h biometrics</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">Updated just now</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {/* Risk Card */}
                    <div className="relative overflow-hidden rounded-lg bg-[#0a0a0a] border border-white/10 p-5">
                        <div className="absolute right-0 top-0 p-3 opacity-10">
                            <AlertTriangle className="w-16 h-16 text-yellow-500" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-yellow-500 mb-2">Potential Risk</p>
                        <h3 className="text-xl font-bold text-white mb-2">Hypertension Risk</h3>
                        <p className="text-sm text-gray-400 mb-4">Your AI-predicted blood pressure (PTT) is showing an upward trend. High sodium intake detected in recent logs.</p>
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-1">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Low</span>
                            <span>Moderate</span>
                            <span>High</span>
                        </div>
                    </div>

                    {/* Health Card */}
                    <div className="relative overflow-hidden rounded-lg bg-[#0a0a0a] border border-white/10 p-5">
                        <div className="absolute right-0 top-0 p-3 opacity-10">
                            <CheckCircle className="w-16 h-16 text-primary" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Doing Great</p>
                        <h3 className="text-xl font-bold text-white mb-2">Mental Well-being</h3>
                        <p className="text-sm text-gray-400 mb-4">Your Stress (HRV) recovers efficiently during sleep. Current low-stress markers indicate optimal mental readiness.</p>
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-1">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Poor</span>
                            <span>Average</span>
                            <span>Excellent</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Regional Health MapContainer */}
            <div className="rounded-xl border border-white/10 bg-[#121212] p-0 overflow-hidden flex flex-col shadow-lg">
                <div className="p-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">map</span>
                            Regional Health Map
                        </h2>
                        <p className="text-sm text-gray-400">Your location & nearby medical facilities</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#000] border border-white/10">
                            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                            <span className="text-xs font-medium text-gray-300">Flu Outbreak</span>
                        </div>
                        <button
                            onClick={() => mapRef.current?.locateUser()}
                            className="p-2 rounded-lg hover:bg-[#2a2a2a] text-gray-400 hover:text-white transition-colors"
                            title="Locate Me"
                        >
                            <Navigation className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[300px] w-full bg-[#050505]">
                    <InteractiveMap
                        ref={mapRef}
                        center={[40.7128, -74.006]}
                        zoom={13}
                        markers={[
                            { id: 'you', lat: 40.7128, lng: -74.006, title: 'You', description: 'Your current location', color: '#13ec5b', type: 'you' },
                            { id: 'cardiology', lat: 40.7250, lng: -73.995, title: 'City Cardiology', description: 'Open • 5 min drive', color: '#ef4444', type: 'facility' },
                            { id: 'pharmacy', lat: 40.7050, lng: -74.015, title: '24h Pharmacy', description: 'Open 24/7', color: '#60a5fa', type: 'facility' }
                        ]}
                    />

                    {/* Environment Info overlay */}
                    <div className="absolute bottom-4 left-4 bg-[#121212]/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-lg max-w-[200px] z-[400] pointer-events-none">
                        <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-gray-400 mt-0.5" />
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Local Environment</p>
                                <div className="flex items-center justify-between gap-4 mb-1">
                                    <span className="text-xs text-gray-300">Air Quality</span>
                                    <span className="text-xs font-bold text-primary">Good (42)</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-xs text-gray-300">Pollen</span>
                                    <span className="text-xs font-bold text-yellow-500">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute bottom-4 right-4 z-[400] flex flex-col gap-2">
                        <button
                            onClick={() => mapRef.current?.zoomIn()}
                            className="bg-black/80 text-white p-1.5 rounded-lg border border-white/10 hover:bg-black shadow-lg"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => mapRef.current?.zoomOut()}
                            className="bg-black/80 text-white p-1.5 rounded-lg border border-white/10 hover:bg-black shadow-lg"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Vitals Trend Chart */}
                <div className="rounded-xl bg-[#121212] p-6 flex-1 border-t border-white/10">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-white">Vitals Trend</h2>
                        <div className="flex gap-2">
                            <button className="rounded-lg bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-white hover:bg-[#333]">Day</button>
                            <button className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-black">Week</button>
                            <button className="rounded-lg bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-white hover:bg-[#333]">Month</button>
                        </div>
                    </div>
                    <div className="relative h-64 w-full">
                        <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                            {/* Grid Lines */}
                            <line stroke="#2a2a2a" strokeWidth="0.5" x1="0" x2="100" y1="20" y2="20"></line>
                            <line stroke="#2a2a2a" strokeWidth="0.5" x1="0" x2="100" y1="40" y2="40"></line>
                            <line stroke="#2a2a2a" strokeWidth="0.5" x1="0" x2="100" y1="60" y2="60"></line>
                            <line stroke="#2a2a2a" strokeWidth="0.5" x1="0" x2="100" y1="80" y2="80"></line>

                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#13ec5b" stopOpacity="0.2"></stop>
                                    <stop offset="100%" stopColor="#13ec5b" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>

                            <path d="M0,70 C10,65 20,75 30,60 C40,50 50,65 60,55 C70,45 80,50 90,40 L100,45 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
                            <path d="M0,70 C10,65 20,75 30,60 C40,50 50,65 60,55 C70,45 80,50 90,40 L100,45" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="1.5"></path>

                            <circle cx="30" cy="60" fill="#13ec5b" r="1.5"></circle>
                            <circle cx="60" cy="55" fill="#13ec5b" r="1.5"></circle>
                            <circle cx="90" cy="40" fill="#13ec5b" r="1.5"></circle>
                        </svg>
                        <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
