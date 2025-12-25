import { Watch, Smartphone, Battery, Bluetooth, Cpu, RefreshCw, Plus } from "lucide-react";

const connectedDevices = [
    {
        id: 1,
        name: "Apple Watch Series 9",
        type: "Smartwatch",
        status: "Connected",
        battery: 85,
        lastSync: "2 mins ago",
        icon: Watch,
    },
    {
        id: 2,
        name: "Omron Evolve BP",
        type: "Blood Pressure Monitor",
        status: "Disconnected",
        battery: 42,
        lastSync: "3 hours ago",
        icon: Cpu,
    },
    {
        id: 3,
        name: "iPhone 15 Pro",
        type: "Mobile Device",
        status: "Connected",
        battery: 92,
        lastSync: "Now",
        icon: Smartphone,
    }
];

export function Devices() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white uppercase italic">Health Devices</h2>
                    <p className="text-sm text-gray-400">Manage your connected wearables and medical sensors.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black rounded-xl font-bold hover:bg-primary-hover transition-all">
                    <Plus className="w-5 h-5" />
                    Pair New Device
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connectedDevices.map((device) => (
                    <div key={device.id} className="rounded-2xl border border-white/5 bg-[#121212] p-6 hover:border-primary/40 transition-all group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 rounded-2xl bg-white/5 text-primary group-hover:bg-primary/20 transition-colors">
                                <device.icon className="w-6 h-6" />
                            </div>
                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${device.status === 'Connected' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                }`}>
                                <Bluetooth className="w-3 h-3" />
                                {device.status}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-white mb-1">{device.name}</h3>
                            <p className="text-sm text-gray-500">{device.type}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Battery className={`w-4 h-4 ${device.battery < 20 ? 'text-red-500' : 'text-primary'}`} />
                                    <span className="text-xs font-medium">Battery Life</span>
                                </div>
                                <span className="text-xs font-bold text-white">{device.battery}%</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-1000 ${device.battery < 20 ? 'bg-red-500' : 'bg-primary'}`}
                                    style={{ width: `${device.battery}%` }}
                                ></div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Last Sync</span>
                                <span className="text-[10px] text-gray-300 font-mono italic">{device.lastSync}</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button className="py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white uppercase hover:bg-white/10 transition-all">
                                Settings
                            </button>
                            <button className="flex items-center justify-center gap-2 py-2 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-bold text-primary uppercase hover:bg-primary/20 transition-all">
                                <RefreshCw className="w-3 h-3" />
                                Sync
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-[#1a1a1a] to-[#121212] p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="p-5 rounded-3xl bg-primary/10 text-primary">
                    <Bluetooth className="w-12 h-12" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2 italic uppercase leading-none">Scanning for Nearby Sensors...</h3>
                    <p className="text-sm text-gray-400 max-w-lg mb-4">Our AI automatically detects medical-grade Bluetooth sensors within range. Make sure your device is in pairing mode.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-400">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            Continuous Glucose Monitor
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-400">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            Smart Insulin Pen
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
