import { motion } from "framer-motion";
import { Clock, Calendar as CalendarIcon, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const schedule = [
    {
        id: "1",
        time: "09:00 AM",
        patient: "James Wilson",
        type: "Cardiac Follow-up",
        location: "Clinic Room 302",
        status: "confirmed"
    },
    {
        id: "2",
        time: "10:30 AM",
        patient: "Sarah Miller",
        type: "Routine Checkup",
        location: "Virtual Consultation",
        status: "confirmed"
    },
    {
        id: "3",
        time: "01:00 PM",
        patient: "Emergency Triage",
        type: "Critical BP Alert",
        location: "ICU Unit B",
        status: "urgent"
    },
    {
        id: "4",
        time: "03:00 PM",
        patient: "Robert Brown",
        type: "Medication Adjustment",
        location: "Clinic Room 105",
        status: "pending"
    },
];

export function DoctorSchedule() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white uppercase italic">Daily Schedule</h2>
                    <p className="text-sm text-gray-500">Wednesday, January 1st, 2026</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-xl text-sm font-bold">
                    <CalendarIcon className="w-4 h-4" />
                    <span>View Calendar</span>
                </button>
            </div>

            <div className="relative space-y-4">
                {/* Timeline Line */}
                <div className="absolute left-[21px] top-2 bottom-2 w-px bg-white/10" />

                {schedule.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6 group"
                    >
                        <div className="flex flex-col items-center pt-2">
                            <div className={cn(
                                "size-11 rounded-full border-4 border-black z-10 flex items-center justify-center transition-all group-hover:scale-110",
                                item.status === 'urgent' ? 'bg-red-500 text-white' :
                                    item.status === 'confirmed' ? 'bg-primary text-black' : 'bg-[#121212] text-gray-400'
                            )}>
                                {item.status === 'urgent' ? <AlertCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                            </div>
                        </div>

                        <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.time}</span>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-xs text-gray-400">{item.type}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.patient}</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span>{item.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-green-500">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        <span>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="flex-1 md:flex-none px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-white transition-colors">
                                    Reschedule
                                </button>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-black rounded-xl text-xs font-bold shadow-lg shadow-primary/20">
                                    Start Session
                                </button>
                            </div>
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
