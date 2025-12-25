export function RecentAlerts() {
    const alerts = [
        {
            id: 1,
            type: "critical",
            title: "Viral Strain Detected",
            description: "New variant identified in Zone B samples. Immediate isolation protocol advised.",
            time: "2m ago",
        },
        {
            id: 2,
            type: "update",
            title: "Vaccine Stock Low",
            description: "Influenza vaccine stock running low in North Wing storage.",
            time: "1h ago",
        },
        {
            id: 3,
            type: "info",
            title: "Shift Change",
            description: "Dr. Richards will be covering the ER night shift.",
            time: "3h ago",
        },
        {
            id: 4,
            type: "update",
            title: "System Maintenance",
            description: "Scheduled maintenance at 02:00 AM.",
            time: "5h ago",
        },
    ];

    return (
        <div className="bg-surface-dark border border-gray-800 rounded-xl flex flex-col h-full overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-gray-800 flex justify-between items-center">
                <h2 className="text-lg font-bold text-white">Recent Alerts</h2>
                <span className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-0.5 rounded-full">2 Critical</span>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`p-3 rounded-lg transition-colors cursor-pointer border ${alert.type === 'critical'
                                ? 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10'
                                : 'bg-black/40 border-gray-800 hover:bg-black/60'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className={`text-xs font-bold uppercase tracking-wide ${alert.type === 'critical' ? 'text-red-500' : alert.type === 'update' ? 'text-primary' : 'text-blue-400'
                                }`}>
                                {alert.type}
                            </span>
                            <span className="text-[10px] text-text-secondary">{alert.time}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-200 mb-1">{alert.title}</h3>
                        <p className="text-xs text-text-secondary line-clamp-2">{alert.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
