import { motion } from "framer-motion";
import { Search, Filter, MoreVertical, Activity, Heart, Thermometer, User } from "lucide-react";

const patients = [
    {
        id: "1",
        name: "James Wilson",
        age: 45,
        status: "critical",
        lastCheck: "2 mins ago",
        vitals: { hr: 112, bp: "145/95", temp: "38.2°C" },
        risk: "High Cardiac Risk"
    },
    {
        id: "2",
        name: "Sarah Miller",
        age: 32,
        status: "stable",
        lastCheck: "15 mins ago",
        vitals: { hr: 72, bp: "120/80", temp: "36.6°C" },
        risk: "Normal"
    },
    {
        id: "3",
        name: "Robert Brown",
        age: 58,
        status: "warning",
        lastCheck: "1 hour ago",
        vitals: { hr: 88, bp: "135/85", temp: "37.1°C" },
        risk: "Hypertension Stage 1"
    },
    {
        id: "4",
        name: "Emily Davis",
        age: 27,
        status: "stable",
        lastCheck: "3 hours ago",
        vitals: { hr: 68, bp: "115/75", temp: "36.4°C" },
        risk: "Normal"
    },
];

export function PatientList() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search patients by name, ID or risk level..."
                        className="w-full bg-[#121212] border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#121212] border border-white/5 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        <Filter className="w-4 h-4" />
                        <span>Filters</span>
                    </button>
                    <button className="px-4 py-2.5 bg-primary text-black rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        Assign New Patient
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {patients.map((patient, index) => (
                    <motion.div
                        key={patient.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
                    >
                        {/* Status Glow */}
                        <div className={cn(
                            "absolute -right-8 -top-8 w-24 h-24 blur-[50px] opacity-20 transition-opacity group-hover:opacity-40",
                            patient.status === 'critical' ? 'bg-red-500' :
                                patient.status === 'warning' ? 'bg-amber-500' : 'bg-primary'
                        )} />

                        <div className="flex items-start justify-between relative z-10">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{patient.name}</h3>
                                    <p className="text-xs text-gray-500">{patient.age} years • ID: #{patient.id}092</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className={cn(
                                    "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                    patient.status === 'critical' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                                        patient.status === 'warning' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                            'bg-primary/10 text-primary border border-primary/20'
                                )}>
                                    {patient.status}
                                </span>
                                <p className="text-[10px] text-gray-500">Checked {patient.lastCheck}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-6 relative z-10">
                            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart className="w-3.5 h-3.5 text-red-500" />
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">Pulse</span>
                                </div>
                                <p className="text-sm font-bold text-white">{patient.vitals.hr} BPM</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Activity className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">BP</span>
                                </div>
                                <p className="text-sm font-bold text-white">{patient.vitals.bp}</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Thermometer className="w-3.5 h-3.5 text-amber-500" />
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">Temp</span>
                                </div>
                                <p className="text-sm font-bold text-white">{patient.vitals.temp}</p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-500 font-bold uppercase">Primary Risk:</span>
                                <span className="text-xs font-medium text-white/90">{patient.risk}</span>
                            </div>
                            <MoreVertical className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
