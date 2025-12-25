import { AlertTriangle, Droplets, Star } from "lucide-react";

export function ActionPanel() {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Recommended Actions */}
            <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
                <h2 className="text-lg font-bold text-white mb-4">Recommended Actions</h2>
                <div className="flex flex-col gap-3">

                    <div className="flex gap-3 items-start p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                        <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-bold text-white">Reduce Sodium Intake</h4>
                            <p className="text-xs text-gray-400 mt-1">Based on BP trends. Limit processed foods for the next 48 hours.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-primary text-black font-bold text-xs">?</div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Deep Breathing</h4>
                            <p className="text-xs text-gray-400 mt-1">Perform 5 minutes of box breathing to stabilize heart rate variance.</p>
                            <button className="mt-2 text-xs font-medium text-primary hover:underline">Start Guided Session</button>
                        </div>
                    </div>

                    <div className="flex gap-3 items-start p-3 rounded-lg bg-[#2a2a2a] border border-white/5 opacity-60">
                        <Droplets className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-bold text-gray-300">Hydration Goal</h4>
                            <p className="text-xs text-gray-500 mt-1">Drink 2 more glasses of water before 8 PM.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Consultation Card */}
            <div className="rounded-xl border border-white/10 bg-[#121212] p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-white mb-4">Consultation</h2>
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className="h-14 w-14 rounded-full bg-cover bg-center border border-white/10"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWB4rDN6HshgEbMj6hn_fzIu8X1YybO-USFmEbo9ioFustI03-k33c0jNE0H_xxqZh98Vf8dFT_uLjQ8Rf0qOv8qVKoIq5Ku7GoK1JhwzDbI9xFiU7U4-DEKn8i0aaOLiiPuC80qmAB7AfwAg4_DKS9HsaM0R3mDlOJqXIX5jtl8hAY0lW85mcwgebRmkEOVY01IWymmdLmoX9L6bxOoXlDxP2RuBaAtf3juzH4oFHx41JxxUPqXNJqakx4Pt0HK06k4bpHAY4T0E')" }}
                    ></div>
                    <div>
                        <h3 className="font-bold text-white">Dr. Sarah Jenkins</h3>
                        <p className="text-sm text-primary">Cardiologist</p>
                        <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-400">4.9 (120 reviews)</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-400 mb-6">Based on your recent risk analysis for hypertension, we recommend a follow-up consultation.</p>
                <div className="mt-auto flex flex-col gap-2">
                    <button className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-black hover:bg-emerald-600 transition-colors shadow-[0_0_15px_rgba(19,236,91,0.2)]">Book Appointment</button>
                    <button className="w-full rounded-lg bg-[#2a2a2a] py-3 text-sm font-medium text-white hover:bg-[#333] transition-colors">View Profile</button>
                </div>
            </div>
        </div>
    );
}
