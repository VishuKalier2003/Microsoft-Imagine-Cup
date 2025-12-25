import { Search, MapPin, Phone, Star, Info } from "lucide-react";
import { InteractiveMap } from "@/components/dashboard/InteractiveMap";

const nearbyFacilities = [
    { id: 1, name: "City Cardiology Center", address: "123 Heart St, New York", distance: "0.8 miles", rating: 4.8, open: "Open Now", type: "facility", color: "#ef4444" },
    { id: 2, name: "24h Metro Pharmacy", address: "456 Main Blvd, New York", distance: "1.2 miles", rating: 4.5, open: "Open 24/7", type: "facility", color: "#60a5fa" },
    { id: 3, name: "St. Mary's General Hospital", address: "789 Medical Plaza, New York", distance: "2.5 miles", rating: 4.2, open: "Open Now", type: "facility", color: "#10b981" },
    { id: 4, name: "QuickCare Urgent Clinic", address: "101 Express Ave, New York", distance: "3.1 miles", rating: 4.0, open: "Closes at 8 PM", type: "facility", color: "#f59e0b" },
];

export function RegionalMapDetail() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-12rem)]">
            {/* Left Column: Map */}
            <div className="flex-1 rounded-xl border border-white/5 bg-[#121212] overflow-hidden relative">
                <InteractiveMap
                    center={[40.7128, -74.006]}
                    zoom={13}
                    markers={[
                        { id: 'you', lat: 40.7128, lng: -74.006, title: 'You', description: 'Your current location', color: '#13ec5b', type: 'you' },
                        { id: 'cardiology', lat: 40.7250, lng: -73.995, title: 'City Cardiology', description: 'Open • 5 min drive', color: '#ef4444', type: 'facility' },
                        { id: 'pharmacy', lat: 40.7050, lng: -74.015, title: '24h Pharmacy', description: 'Open 24/7', color: '#60a5fa', type: 'facility' },
                        { id: 'hospital', lat: 40.7300, lng: -73.980, title: 'St. Mary\'s Hospital', description: 'General Hospital', color: '#10b981', type: 'facility' },
                    ]}
                />

                {/* Map Search Overlay */}
                <div className="absolute top-4 left-4 z-[400] w-72">
                    <div className="flex items-center bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-lg px-3 shadow-2xl">
                        <Search className="w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search medical facilities..."
                            className="bg-transparent border-none text-sm text-white focus:ring-0 py-2.5 w-full"
                        />
                    </div>
                </div>

                {/* Floating Map Info */}
                <div className="absolute bottom-4 left-4 z-[400] bg-[#121212]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl max-w-xs">
                    <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Map Tip</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Click on markers to see facility details, contact info, and navigation options. Markers are color-coded by medical specialty.
                    </p>
                </div>
            </div>

            {/* Right Column: Facility List */}
            <div className="w-full lg:w-96 flex flex-col gap-4 overflow-y-auto">
                <div className="rounded-xl border border-white/5 bg-[#121212] p-5">
                    <h2 className="text-lg font-bold text-white mb-1">Nearby Facilities</h2>
                    <p className="text-sm text-gray-400 mb-4">Found 12 locations within 5 miles</p>

                    <div className="flex flex-col gap-3">
                        {nearbyFacilities.map((facility) => (
                            <div key={facility.id} className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: facility.color }}></div>
                                        <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{facility.name}</h3>
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-500">{facility.distance}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                                    <MapPin className="w-3 h-3 text-gray-500" />
                                    <span className="truncate">{facility.address}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs font-bold text-white">{facility.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[10px] font-bold uppercase ${facility.open.includes('Open') ? 'text-primary' : 'text-yellow-500'}`}>
                                            {facility.open}
                                        </span>
                                        <button className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white">
                                            <Phone className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-4 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-[#2a2a2a] transition-all">
                        View All Locations
                    </button>
                </div>

                <div className="rounded-xl border border-white/5 bg-primary/5 p-5">
                    <h3 className="text-sm font-bold text-white mb-2">Need immediate help?</h3>
                    <p className="text-xs text-gray-400 mb-4">Contact our 24/7 AI triage line for instant medical guidance.</p>
                    <button className="w-full py-2.5 bg-primary text-black rounded-lg text-xs font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                        Start AI Triage
                    </button>
                </div>
            </div>
        </div>
    );
}
