import { useRef } from "react";
import { Search, Plus, Minus, Navigation, Maximize2, Filter } from "lucide-react";
import { InteractiveMap, InteractiveMapRef } from "@/components/dashboard/InteractiveMap";

export function DiseaseSpreadMap() {
    const mapRef = useRef<InteractiveMapRef>(null);

    const diseaseMarkers = [
        { id: 1, lat: 40.7128, lng: -74.006, title: "Influenza", description: "1,250 cases - Critical", color: "#ef4444", type: 'outbreak' },
        { id: 2, lat: 19.0760, lng: 72.8777, title: "Dengue", description: "850 cases - Moderate", color: "#f97316", type: 'outbreak' },
        { id: 3, lat: 6.5244, lng: 3.3792, title: "Malaria", description: "450 cases - Moderate", color: "#f97316", type: 'outbreak' },
        { id: 4, lat: 51.5074, lng: -0.1278, title: "COVID-19", description: "2,100 cases - Critical", color: "#b91c1c", type: 'outbreak' },
        { id: 5, lat: 23.8103, lng: 90.4125, title: "Cholera", description: "300 cases - Low", color: "#10b981", type: 'outbreak' },
    ];

    return (
        <div className="flex flex-col bg-surface-dark border border-gray-800 rounded-xl overflow-hidden shadow-sm h-full">
            <div className="px-5 py-4 border-b border-gray-800 flex justify-between items-center bg-surface-dark w-full shrink-0">
                <h2 className="text-lg font-bold text-white">Regional Disease Spread</h2>
                <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-black rounded-lg text-text-secondary transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 hover:bg-black rounded-lg text-text-secondary transition-colors">
                        <Maximize2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="relative flex-1 bg-gray-900 w-full min-h-[400px]">
                <InteractiveMap
                    ref={mapRef}
                    center={[20, 0]}
                    zoom={2}
                    markers={diseaseMarkers as any}
                />

                {/* Search overlay */}
                <div className="absolute top-4 left-4 z-[400] w-64">
                    <div className="flex items-center bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg px-3">
                        <Search className="text-text-secondary w-5 h-5" />
                        <input
                            className="w-full bg-transparent border-none text-white text-sm placeholder-text-secondary focus:ring-0 py-2 h-10"
                            placeholder="Search zone..."
                            type="text"
                        />
                    </div>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-6 right-4 z-[400] flex flex-col gap-2">
                    <button
                        onClick={() => mapRef.current?.zoomIn()}
                        className="bg-black/80 text-white p-2 rounded-lg border border-gray-700 hover:bg-black shadow-lg"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => mapRef.current?.zoomOut()}
                        className="bg-black/80 text-white p-2 rounded-lg border border-gray-700 hover:bg-black shadow-lg"
                    >
                        <Minus className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => mapRef.current?.locateUser()}
                        className="bg-primary text-black p-2 rounded-lg border border-primary hover:bg-primary-hover shadow-lg mt-2 transition-colors"
                        title="Locate Me"
                    >
                        <Navigation className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
