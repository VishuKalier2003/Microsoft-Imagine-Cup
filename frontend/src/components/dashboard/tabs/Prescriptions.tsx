import { Pill, Clock, AlertCircle, RefreshCw, FileText, Download, CheckCircle2 } from "lucide-react";

const currentMedications = [
    {
        id: 1,
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once Daily (Morning)",
        lastTaken: "Today, 08:30 AM",
        remaining: "12 days",
        status: "Active",
        instructions: "Take with food. Do not skip doses.",
        doctor: "Dr. Sarah Jenkins",
    },
    {
        id: 2,
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once Daily (Night)",
        lastTaken: "Yesterday, 10:00 PM",
        remaining: "24 days",
        status: "Active",
        instructions: "Take before bedtime.",
        doctor: "Dr. Sarah Jenkins",
    },
    {
        id: 3,
        name: "Amoxicillin",
        dosage: "500mg",
        frequency: "Three times daily",
        lastTaken: "Today, 12:45 PM",
        remaining: "3 days",
        status: "Completing Soon",
        instructions: "Finish the entire course.",
        doctor: "Dr. Michael Chen",
    }
];

export function Prescriptions() {
    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-white uppercase italic">Active Prescriptions</h2>
                        <p className="text-sm text-gray-400">Track and manage your current medications and refills.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-[#2a2a2a] transition-all">
                        <Download className="w-4 h-4" />
                        Download All (PDF)
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {currentMedications.map((med) => (
                        <div key={med.id} className="rounded-xl border border-white/5 bg-black/40 p-5 group hover:border-primary/40 transition-all">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Pill className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{med.name}</h3>
                                            <p className="text-xs text-gray-500">{med.dosage} • Prescribed by {med.doctor}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Frequency</span>
                                            <span className="text-sm text-gray-300">{med.frequency}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Last Taken</span>
                                            <span className="text-sm text-gray-300">{med.lastTaken}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Remaining</span>
                                            <span className="text-sm text-primary font-bold">{med.remaining}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Status</span>
                                            <span className={`text-[10px] font-bold uppercase ${med.status === 'Active' ? 'text-primary' : 'text-yellow-500'}`}>
                                                {med.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <p className="text-xs text-gray-400 italic">"{med.instructions}"</p>
                                    </div>
                                </div>
                                <div className="flex flex-row md:flex-col justify-center gap-2 shrink-0 md:min-w-[140px]">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-black rounded-lg text-xs font-bold uppercase transition-all hover:bg-primary-hover active:scale-95">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Take Now
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border border-white/10 text-white rounded-lg text-xs font-bold uppercase transition-all hover:bg-[#2a2a2a]">
                                        <RefreshCw className="w-4 h-4" />
                                        Refill
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="text-sm font-bold text-white uppercase italic">Prescription History</h3>
                    </div>
                    <div className="space-y-3">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 group hover:border-white/20 cursor-pointer">
                                <div>
                                    <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Ibuprofen 400mg</p>
                                    <p className="text-[10px] text-gray-500">Expired Mar 05, 2024 • Dr. Michael Chen</p>
                                </div>
                                <Download className="w-4 h-4 text-gray-600 group-hover:text-white" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6 relative overflow-hidden group">
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold text-white mb-2 uppercase italic leading-tight">Sync with your Smart Watch</h3>
                        <p className="text-xs text-gray-400 mb-4 max-w-[200px]">Receive vibration alerts for your medication directly on your wrist.</p>
                        <button className="px-5 py-2.5 bg-white text-black rounded-lg text-xs font-bold uppercase hover:bg-gray-200 transition-all">
                            Enable Sync
                        </button>
                    </div>
                    <Clock className="absolute top-[-10px] right-[-10px] w-32 h-32 text-primary opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform duration-700" />
                </div>
            </div>
        </div>
    );
}
