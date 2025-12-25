export function DoctorAnalytics() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. Weekly Disease Spread (Area Chart) */}
            <div className="bg-surface-dark border border-gray-800 rounded-xl p-5 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h2 className="text-base font-bold text-white">Weekly Disease Spread</h2>
                        <p className="text-xs text-text-secondary">New cases reported</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-white">245</p>
                        <p className="text-xs text-primary">+15% vs last week</p>
                    </div>
                </div>
                <div className="flex-1 min-h-[160px] relative mt-2">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 100">
                        <defs>
                            <linearGradient id="doctorChartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#13ec5b" stopOpacity="0.2"></stop>
                                <stop offset="100%" stopColor="#13ec5b" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M0,80 C30,75 50,90 80,60 C110,30 140,40 170,50 C200,60 230,20 260,30 C280,36 290,25 300,20 V100 H0 Z" fill="url(#doctorChartGradient)"></path>
                        <path d="M0,80 C30,75 50,90 80,60 C110,30 140,40 170,50 C200,60 230,20 260,30 C280,36 290,25 300,20" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="2"></path>
                        <circle cx="80" cy="60" fill="#000" r="3" stroke="#13ec5b" strokeWidth="2"></circle>
                        <circle cx="170" cy="50" fill="#000" r="3" stroke="#13ec5b" strokeWidth="2"></circle>
                        <circle cx="260" cy="30" fill="#000" r="3" stroke="#13ec5b" strokeWidth="2"></circle>
                    </svg>
                </div>
                <div className="flex justify-between text-[10px] text-text-secondary mt-2 px-1">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
            </div>

            {/* 2. Diagnosis Distribution (Donut Chart) */}
            <div className="bg-surface-dark border border-gray-800 rounded-xl p-5 shadow-sm flex flex-col">
                <h2 className="text-base font-bold text-white mb-4">Diagnosis Distribution</h2>
                <div className="flex items-center gap-6 h-full">
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                            <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="45, 100" strokeWidth="4"></path>
                            <path className="text-green-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="30, 100" strokeDashoffset="-45" strokeWidth="4"></path>
                            <path className="text-gray-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-75" strokeWidth="4"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-xl font-bold text-white">1.2k</span>
                            <span className="text-[10px] text-text-secondary">Cases</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span className="text-gray-300">Seasonal Flu</span>
                            </div>
                            <span className="font-bold text-white">45%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-800"></span>
                                <span className="text-gray-300">COVID-19</span>
                            </div>
                            <span className="font-bold text-white">30%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                                <span className="text-gray-300">Other</span>
                            </div>
                            <span className="font-bold text-white">25%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Treatment Efficacy (Bar Chart) */}
            <div className="bg-surface-dark border border-gray-800 rounded-xl p-5 shadow-sm flex flex-col">
                <h2 className="text-base font-bold text-white mb-4">Treatment Efficacy</h2>
                <div className="flex flex-col gap-4 justify-center h-full">
                    {[
                        { label: "Amoxicillin", value: "92%", width: "92%", opacity: "1" },
                        { label: "Ibuprofen", value: "78%", width: "78%", opacity: "0.7" },
                        { label: "Azithromycin", value: "65%", width: "65%", opacity: "0.5" },
                        { label: "Tamiflu", value: "45%", width: "45%", opacity: "0.3" },
                    ].map((item) => (
                        <div key={item.label} className="group">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">{item.label}</span>
                                <span className="text-primary font-bold">{item.value}</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full transition-all group-hover:brightness-110"
                                    style={{ width: item.width, opacity: item.opacity }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
