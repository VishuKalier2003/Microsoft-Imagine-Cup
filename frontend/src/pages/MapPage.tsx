"use client";
import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, LayersControl, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter, Search } from "lucide-react";

// Mock data for disease distribution
const diseaseData = [
    { id: 1, name: "Influenza", cases: 1250, city: "New York", lat: 40.7128, lng: -74.006, risk: "High", color: "#ef4444" },
    { id: 2, name: "Dengue", cases: 850, city: "Mumbai", lat: 19.0760, lng: 72.8777, risk: "Moderate", color: "#f97316" },
    { id: 3, name: "Malaria", cases: 450, city: "Lagos", lat: 6.5244, lng: 3.3792, risk: "Moderate", color: "#f97316" },
    { id: 4, name: "COVID-19", cases: 2100, city: "London", lat: 51.5074, lng: -0.1278, risk: "Critical", color: "#b91c1c" },
    { id: 5, name: "Cholera", cases: 300, city: "Dhaka", lat: 23.8103, lng: 90.4125, risk: "Low", color: "#10b981" },
];

export default function MapPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = diseaseData.filter(item =>
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zinc-950/50 p-6 rounded-2xl border border-white/5 backdrop-blur-xl">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Global Disease Tracker</h1>
                        <p className="text-zinc-500 text-sm mt-1">Real-time epidemiological monitoring and data analysis.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search region..."
                                className="bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 w-64"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors">
                            <Filter size={18} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors">
                            <Download size={16} />
                            Export CSV
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Map Container */}
                    <Card className="lg:col-span-2 bg-zinc-950 border-white/5 overflow-hidden rounded-2xl h-[600px] relative">
                        <div className="absolute top-4 right-4 z-[400] pointer-events-none">
                            {/* Controls are native to leaflet now */}
                        </div>
                        <MapContainer
                            center={[20, 0]}
                            zoom={2}
                            style={{ height: '100%', width: '100%', background: '#09090b', zIndex: 1 }}
                            zoomControl={true}
                        >
                            <LayersControl position="topright">
                                <LayersControl.BaseLayer checked name="Dark Mode">
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    />
                                </LayersControl.BaseLayer>

                                <LayersControl.BaseLayer name="Satellite">
                                    <TileLayer
                                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                                    />
                                </LayersControl.BaseLayer>

                                <LayersControl.BaseLayer name="Light Mode">
                                    <TileLayer
                                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    />
                                </LayersControl.BaseLayer>

                                <LayersControl.Overlay checked name="Epidemic Data">
                                    <LayerGroup>
                                        {filteredData.map((marker) => (
                                            <CircleMarker
                                                key={marker.id}
                                                center={[marker.lat, marker.lng]}
                                                pathOptions={{ color: marker.color, fillColor: marker.color, fillOpacity: 0.6 }}
                                                radius={Math.sqrt(marker.cases) / 1.5}
                                            >
                                                <Popup className="custom-popup">
                                                    <div className="p-1">
                                                        <h3 className="font-bold text-zinc-900">{marker.city}</h3>
                                                        <p className="text-xs text-zinc-600">{marker.name}: {marker.cases} cases</p>
                                                        <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-600">
                                                            Status: {marker.risk}
                                                        </div>
                                                    </div>
                                                </Popup>
                                                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                                                    <span className="font-semibold text-black">{marker.city} ({marker.cases} cases)</span>
                                                </Tooltip>
                                            </CircleMarker>
                                        ))}
                                    </LayerGroup>
                                </LayersControl.Overlay>
                            </LayersControl>
                        </MapContainer>
                    </Card>

                    {/* Data Table (The "Excel" view) */}
                    <Card className="bg-zinc-950 border-white/5 flex flex-col rounded-2xl">
                        <CardHeader className="border-b border-white/5">
                            <CardTitle className="text-lg">Epidemic Dataset</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 overflow-auto flex-1">
                            <Table>
                                <TableHeader className="bg-white/5 sticky top-0 border-none">
                                    <TableRow className="border-white/5 hover:bg-transparent">
                                        <TableHead className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold">Region</TableHead>
                                        <TableHead className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold">Disease</TableHead>
                                        <TableHead className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold text-right">Count</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredData.map((item) => (
                                        <TableRow key={item.id} className="border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                                            <TableCell className="font-medium text-white">{item.city}</TableCell>
                                            <TableCell className="uppercase text-[10px] tracking-wide text-zinc-400">
                                                <span className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                                                    {item.name}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right font-mono text-zinc-500 group-hover:text-white transition-colors">{item.cases.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <div className="p-4 border-t border-white/5 bg-zinc-900/50 rounded-b-2xl">
                            <div className="flex justify-between items-center text-xs text-zinc-500">
                                <span>Showing {filteredData.length} active logs</span>
                                <button className="text-blue-500 font-bold hover:underline">View All Records</button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <style>{`
                .leaflet-control-layers {
                    background: #18181b !important;
                    border: 1px solid rgba(255,255,255,0.1) !important;
                    color: #a1a1aa !important;
                    border-radius: 12px !important;
                }
                .leaflet-control-layers-toggle {
                    filter: invert(1) brightness(0.8);
                }
                .custom-popup .leaflet-popup-content-wrapper {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 12px;
                    padding: 4px;
                }
                .leaflet-popup-tip {
                    background: rgba(255, 255, 255, 0.95);
                }
            `}</style>
        </DashboardLayout>
    );
}
