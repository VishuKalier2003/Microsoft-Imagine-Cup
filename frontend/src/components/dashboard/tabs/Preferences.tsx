import { Bell, Shield, Eye, Smartphone, Save } from "lucide-react";

export function Preferences() {
    return (
        <div className="mx-auto max-w-4xl flex flex-col gap-8">
            {/* Profile Section */}
            <div className="rounded-2xl border border-white/5 bg-[#121212] overflow-hidden">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-lg font-bold text-white uppercase italic">Profile Information</h2>
                    <p className="text-sm text-gray-400">Update your personal details and medical bio.</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                        <input
                            type="text"
                            defaultValue="Alex Morgan"
                            className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                        <input
                            type="email"
                            defaultValue="alex.morgan@example.com"
                            className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Medical Notes (AI Context)</label>
                        <textarea
                            rows={3}
                            placeholder="Add brief details about allergies or chronic conditions..."
                            className="bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                        />
                        <p className="text-[10px] text-gray-600">This info helps the AI provide more accurate health intelligence tailored to your history.</p>
                    </div>
                </div>
            </div>

            {/* Notification & Privacy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Notifications */}
                <div className="rounded-2xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="w-5 h-5 text-primary" />
                        <h3 className="text-sm font-bold text-white uppercase italic">Notifications</h3>
                    </div>
                    <div className="space-y-6">
                        {[
                            { label: "Emergency Alerts", desc: "Critical health risks in your area", default: true },
                            { label: "Vitals Milestones", desc: "Achievements and trend reports", default: true },
                            { label: "Medication Reminders", desc: "Mobile & Watch notifications", default: true },
                            { label: "Policy Updates", desc: "General platform announcements", default: false },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-white">{item.label}</p>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                                <button className={`w-10 h-5 rounded-full transition-colors relative ${item.default ? 'bg-primary' : 'bg-gray-800'}`}>
                                    <div className={`absolute top-1 w-3 h-3 rounded-full bg-black transition-all ${item.default ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="rounded-2xl border border-white/5 bg-[#121212] p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Shield className="w-5 h-5 text-primary" />
                        <h3 className="text-sm font-bold text-white uppercase italic">Security</h3>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-black border border-white/5 hover:border-primary/50 transition-all group">
                            <div className="flex items-center gap-3">
                                <Eye className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-300">Biometric Login</span>
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase">FaceID Active</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-black border border-white/5 hover:border-primary/50 transition-all group">
                            <div className="flex items-center gap-3">
                                <Smartphone className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-300">Two-Factor Auth</span>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase">Disabled</span>
                        </button>
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 text-center">Data Encryption</h4>
                        <p className="text-[10px] text-gray-500 text-center">Your health records are protected with 256-bit AES end-to-end encryption. Only you and authorized doctors can view them.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Action */}
            <div className="flex items-center justify-end gap-4 pb-8">
                <button className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase">Cancel</button>
                <button className="flex items-center gap-2 px-8 py-2.5 bg-primary text-black rounded-xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 uppercase">
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
            </div>
        </div>
    );
}
