import { Activity, ArrowUp, ArrowDown, Clock, Search, Filter, Download, Zap } from "lucide-react";

const mockVitals = [
    { id: 1, date: "2024-03-20", time: "09:45 AM", bpm: 72, spo2: 98, bp: "120/80", stress: 32, sleep: "7h 30m", status: "Optimal" },
    { id: 2, date: "2024-03-19", time: "10:15 PM", bpm: 68, spo2: 99, bp: "118/78", stress: 28, sleep: "8h 15m", status: "Optimal" },
    { id: 3, date: "2024-03-19", time: "08:30 AM", bpm: 75, spo2: 97, bp: "125/82", stress: 45, sleep: "6h 45m", status: "Normal" },
    { id: 4, date: "2024-03-18", time: "09:00 PM", bpm: 82, spo2: 98, bp: "115/75", stress: 52, sleep: "7h 00m", status: "Normal" },
    { id: 5, date: "2024-03-18", time: "07:45 AM", bpm: 88, spo2: 96, bp: "130/85", stress: 68, sleep: "5h 50m", status: "Elevated" },
    { id: 6, date: "2024-03-17", time: "11:00 PM", bpm: 65, spo2: 99, bp: "110/70", stress: 25, sleep: "8h 30m", status: "Optimal" },
];

export function VitalsHistory() {
    return (
        <div className="flex flex-col gap-6">
            {/* Stats Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center justify-between mb-2 text-gray-400">
                        <span className="text-sm font-medium">Avg Heart Rate</span>
                        <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">74</span>
                        <span className="text-xs font-medium text-primary">BPM</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                        <ArrowDown className="w-3 h-3" />
                        <span>2.5% from last week</span>
                    </div>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center justify-between mb-2 text-gray-400">
                        <span className="text-sm font-medium">BP Consistency</span>
                        <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">92</span>
                        <span className="text-xs font-medium text-primary">%</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                        <ArrowUp className="w-3 h-3" />
                        <span>4.1% from last month</span>
                    </div>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center justify-between mb-2 text-gray-400">
                        <span className="text-sm font-medium">Avg Stress Level</span>
                        <Zap className="w-4 h-4" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">41</span>
                        <span className="text-xs font-medium text-primary">%</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                        <ArrowDown className="w-3 h-3" />
                        <span>8.4% from last week</span>
                    </div>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center justify-between mb-2 text-gray-400">
                        <span className="text-sm font-medium">Sleep Efficiency</span>
                        <Activity className="w-4 h-4" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">88</span>
                        <span className="text-xs font-medium text-primary">%</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-yellow-500">
                        <ArrowDown className="w-3 h-3" />
                        <span>1.2% from last week</span>
                    </div>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="rounded-xl border border-white/5 bg-[#121212] overflow-hidden">
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-white uppercase italic">Historical Vitals Data</h2>
                        <p className="text-sm text-gray-400">View and export your historical health readings.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search dates..."
                                className="pl-9 pr-4 py-2 bg-black border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary w-48"
                            />
                        </div>
                        <button className="p-2 bg-[#1a1a1a] border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                            <Filter className="w-4 h-4" />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
                            <Download className="w-4 h-4" />
                            Export CSV
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/40 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-white/5">
                                <th className="px-6 py-4">Date & Time</th>
                                <th className="px-6 py-4">Heart Rate</th>
                                <th className="px-6 py-4">SpO2</th>
                                <th className="px-6 py-4">Blood Pressure</th>
                                <th className="px-6 py-4">Stress Level</th>
                                <th className="px-6 py-4">Sleep duration</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm">
                            {mockVitals.map((record) => (
                                <tr key={record.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">{record.date}</span>
                                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {record.time}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        <span className="font-bold text-white">{record.bpm}</span> BPM
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        <span className="font-bold text-white">{record.spo2}</span> %
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white">{record.bp}</span>
                                            <span className="text-[10px] text-primary italic uppercase tracking-tighter">PTT Estimate</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white">{record.stress}%</span>
                                            <div className="flex-1 w-12 h-1 bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${record.stress < 40 ? 'bg-primary' : record.stress < 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                    style={{ width: `${record.stress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">
                                        {record.sleep}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${record.status === 'Optimal' ? 'bg-primary/10 text-primary border-primary/20' :
                                            record.status === 'Normal' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                            }`}>
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-500 hover:text-white text-xs font-medium">Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-white/5 flex items-center justify-between text-sm text-gray-400">
                    <span>Showing 6 of 124 records</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-black border border-white/10 rounded hover:text-white disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 bg-black border border-white/10 rounded hover:text-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
