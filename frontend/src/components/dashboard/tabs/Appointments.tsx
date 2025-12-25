import { Calendar, Clock, Video, MapPin, ChevronRight, Plus } from "lucide-react";

const upcomingAppointments = [
    {
        id: 1,
        doctor: "Dr. Sarah Jenkins",
        specialty: "Cardiologist",
        date: "Tomorrow, March 23",
        time: "10:30 AM",
        type: "Online Video Call",
        icon: Video,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
        id: 2,
        doctor: "Dr. Michael Chen",
        specialty: "General Physician",
        date: "Friday, March 27",
        time: "02:15 PM",
        type: "In-Person Visit",
        icon: MapPin,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100",
    }
];

const pastAppointments = [
    { id: 3, doctor: "Dr. Emily Blunt", specialty: "Dermatologist", date: "Mar 10, 2024", status: "Completed" },
    { id: 4, doctor: "Dr. Robert Wilson", specialty: "Optometrist", date: "Feb 24, 2024", status: "Completed" },
    { id: 5, doctor: "Dr. Sarah Jenkins", specialty: "Cardiologist", date: "Jan 15, 2024", status: "Follow-up required" },
];

export function Appointments() {
    return (
        <div className="flex flex-col gap-8">
            {/* Header with Quick Action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white uppercase italic">Your Appointments</h2>
                    <p className="text-sm text-gray-400">Manage your upcoming consultations and medical history.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black rounded-xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                    <Plus className="w-5 h-5" />
                    Book New Consultation
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Upcoming (Col Span 2) */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Upcoming This Week</h3>

                    {upcomingAppointments.map((apt) => (
                        <div key={apt.id} className="rounded-2xl border border-white/5 bg-[#121212] p-6 hover:border-primary/30 transition-all group">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors shrink-0">
                                    <img src={apt.image} alt={apt.doctor} className="h-full w-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-start justify-between mb-1">
                                        <div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{apt.doctor}</h4>
                                            <p className="text-sm text-primary font-medium">{apt.specialty}</p>
                                        </div>
                                        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter">
                                            <apt.icon className="w-3 h-3" />
                                            {apt.type}
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-white/5 pt-4">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span className="text-sm">{apt.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span className="text-sm">{apt.time}</span>
                                        </div>
                                        <div className="hidden md:flex items-center justify-end gap-2 text-primary font-bold cursor-pointer hover:underline">
                                            <span className="text-xs uppercase">Join Call</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="rounded-2xl border-2 border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center">
                        <div className="p-4 rounded-full bg-white/5 mb-4">
                            <Calendar className="w-8 h-8 text-gray-600" />
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs">No more appointments scheduled for this week. Stay healthy!</p>
                    </div>
                </div>

                {/* Right: History & Calendar */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recent Visits</h3>
                    <div className="rounded-xl border border-white/5 bg-[#121212] divide-y divide-white/5">
                        {pastAppointments.map((apt) => (
                            <div key={apt.id} className="p-4 hover:bg-white/5 transition-colors group cursor-pointer">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">{apt.doctor}</span>
                                    <span className="text-[10px] text-gray-500 font-mono">{apt.date}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">{apt.specialty}</span>
                                    <span className={`text-[10px] font-bold uppercase ${apt.status.includes('Completed') ? 'text-gray-500' : 'text-yellow-500'}`}>
                                        {apt.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent p-6">
                        <h4 className="text-sm font-bold text-white mb-2 italic uppercase">Smart Reminder</h4>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            Based on your recent heart rate data, we recommend a follow-up with your cardiologist within the next 14 days.
                        </p>
                        <button className="w-full py-2 bg-primary text-black rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-primary-hover transition-all">
                            Check Available Slots
                        </button>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-[#121212] p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-white uppercase italic">Active Doctors</span>
                            <span className="text-[10px] text-primary hover:underline cursor-pointer">View All</span>
                        </div>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-8 w-8 rounded-full border-2 border-[#121212] bg-gray-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="doc" />
                                </div>
                            ))}
                            <div className="h-8 w-8 rounded-full border-2 border-[#121212] bg-white/5 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                +12
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
