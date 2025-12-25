import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, forwardRef, useImperativeHandle, useRef, useState } from "react";
import L from "leaflet";

// Fix for default marker icons in Leaflet with Vite/Webpack
// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export interface MapMarker {
    id: number | string;
    lat: number;
    lng: number;
    title: string;
    description: string;
    color: string;
    type?: 'outbreak' | 'facility' | 'you';
}

export interface InteractiveMapRef {
    zoomIn: () => void;
    zoomOut: () => void;
    resetView: () => void;
    locateUser: () => void;
}

interface InteractiveMapProps {
    center: [number, number];
    zoom: number;
    markers: MapMarker[];
}

export const InteractiveMap = forwardRef<InteractiveMapRef, InteractiveMapProps>(({ center, zoom, markers }, ref) => {
    const mapRef = useRef<L.Map | null>(null);
    const [userLoc, setUserLoc] = useState<L.LatLng | null>(null);

    useImperativeHandle(ref, () => ({
        zoomIn: () => {
            mapRef.current?.zoomIn();
        },
        zoomOut: () => {
            mapRef.current?.zoomOut();
        },
        resetView: () => {
            mapRef.current?.setView(center, zoom);
        },
        locateUser: () => {
            if (!mapRef.current) return;
            mapRef.current.locate({ setView: true, maxZoom: 16 });
        }
    }));

    // Listen for location found events for extra logging or marker updates
    useEffect(() => {
        if (!mapRef.current) return;

        const onLocationFound = (e: L.LocationEvent) => {
            console.log("Location found:", e.latlng);
            setUserLoc(e.latlng);
        };

        const onLocationError = (e: L.ErrorEvent) => {
            console.warn("Location error:", e.message);
            alert("Could not get your location. Please check your browser permissions.");
        };

        mapRef.current.on('locationfound', onLocationFound);
        mapRef.current.on('locationerror', onLocationError);

        return () => {
            mapRef.current?.off('locationfound', onLocationFound);
            mapRef.current?.off('locationerror', onLocationError);
        };
    }, []);

    // Force a resize fix for layout shifts
    useEffect(() => {
        const timer = setTimeout(() => {
            mapRef.current?.invalidateSize();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={center}
                zoom={zoom}
                style={{ height: '100%', width: '100%', background: '#09090b' }}
                zoomControl={false}
                scrollWheelZoom={true}
                ref={mapRef}
            >
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Dark Mode">
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satellite">
                        <TileLayer
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EBP, and the GIS User Community'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Light Mode">
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.Overlay checked name="Health Markers">
                        <div key="markers-layer">
                            {/* Static Markers - Hide hardcoded 'you' if real location exists */}
                            {markers.filter(m => m.type !== 'you' || !userLoc).map((marker) => (
                                <CircleMarker
                                    key={marker.id}
                                    center={[marker.lat, marker.lng]}
                                    pathOptions={{
                                        color: marker.color,
                                        fillColor: marker.color,
                                        fillOpacity: 0.6,
                                        weight: 2
                                    }}
                                    radius={marker.type === 'you' ? 8 : 12}
                                >
                                    <Popup className="custom-popup">
                                        <div className="p-1">
                                            <h3 className="font-bold text-gray-900">{marker.title}</h3>
                                            <p className="text-xs text-gray-600">{marker.description}</p>
                                        </div>
                                    </Popup>
                                    {marker.type === 'you' && (
                                        <Tooltip permanent direction="top" offset={[0, -5]}>
                                            <span className="text-[10px] font-bold">You</span>
                                        </Tooltip>
                                    )}
                                </CircleMarker>
                            ))}

                            {/* Real User Location Marker */}
                            {userLoc && (
                                <CircleMarker
                                    center={userLoc}
                                    pathOptions={{
                                        color: '#3b82f6',
                                        fillColor: '#3b82f6',
                                        fillOpacity: 0.8,
                                        weight: 2
                                    }}
                                    radius={8}
                                >
                                    <Popup className="custom-popup">
                                        <div className="p-1">
                                            <h3 className="font-bold text-gray-900">Your Actual Location</h3>
                                            <p className="text-xs text-gray-600">Detected via browser</p>
                                        </div>
                                    </Popup>
                                    <Tooltip permanent direction="top" offset={[0, -5]}>
                                        <span className="text-[10px] font-bold">You</span>
                                    </Tooltip>
                                </CircleMarker>
                            )}
                        </div>
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>

            <style>{`
                .leaflet-container {
                    border-radius: inherit;
                }
                .custom-popup .leaflet-popup-content-wrapper {
                    background: white;
                    color: black;
                    border-radius: 8px;
                    padding: 0;
                    overflow: hidden;
                }
                .custom-popup .leaflet-popup-content {
                    margin: 8px 12px;
                }
                .leaflet-popup-tip {
                    background: white;
                }
                /* Custom styling for layer control */
                .leaflet-control-layers {
                    background: rgba(18, 18, 18, 0.9) !important;
                    backdrop-filter: blur(8px);
                    color: white !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 12px !important;
                    padding: 4px 8px !important;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
                }
                .leaflet-control-layers-list label {
                    font-size: 12px;
                    font-family: inherit;
                    cursor: pointer;
                    margin: 4px 0;
                }
                .leaflet-control-layers-base label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .leaflet-control-layers-overlays {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    margin-top: 4px;
                    padding-top: 4px;
                }
            `}</style>
        </div>
    );
});
