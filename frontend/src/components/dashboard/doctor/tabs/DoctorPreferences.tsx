import { Bell, Lock, User } from "lucide-react";

export function DoctorPreferences() {
    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-12">
            <div>
                <h2 className="text-xl font-bold text-white mb-2 uppercase italic tracking-tight">System Preferences</h2>
                <p className="text-sm text-gray-400">Manage your clinical workstation settings and security protocols.</p>
            </div>

            {/* Profile Section */}
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Professional Profile</h3>
                        <p className="text-sm text-gray-500">Update your clinical information and credentials.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                        <input type="text" value="Dr. Smith" className="w-full bg-[#121212] border border-white/5 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary/50" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Medical ID</label>
                        <input type="text" value="MED-9201-XYZ" className="w-full bg-[#121212] border border-white/5 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none" disabled />
                    </div>
                </div>
            </div>

            {/* Settings Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Bell className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-white uppercase italic text-sm">Clinical Alerts</h4>
                    </div>
                    <div className="space-y-4">
                        <SettingToggle label="Critical Vital Alerts" enabled={true} />
                        <SettingToggle label="Outbreak Geo-fencing" enabled={true} />
                        <SettingToggle label="Patient Inactivity Reminders" enabled={false} />
                    </div>
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Lock className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-white uppercase italic text-sm">Security & Privacy</h4>
                    </div>
                    <div className="space-y-4">
                        <SettingToggle label="Biometric Sign-on" enabled={true} />
                        <SettingToggle label="Session Auto-lock" enabled={true} />
                        <SettingToggle label="HIPAA Compliance Audit" enabled={true} />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button className="px-8 py-3 bg-primary text-black rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    Save Changes
                </button>
            </div>
        </div>
    );
}

function SettingToggle({ label, enabled }: { label: string; enabled: boolean }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300 font-medium">{label}</span>
            <div className={cn(
                "w-10 h-5 rounded-full relative cursor-pointer transition-colors",
                enabled ? "bg-primary" : "bg-white/10"
            )}>
                <div className={cn(
                    "absolute top-1 w-3 h-3 rounded-full bg-white transition-all",
                    enabled ? "right-1" : "left-1"
                )} />
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
