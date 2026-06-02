"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { locations } from "../data/locations";
import { LocationMarker } from "../types";

interface MigrationMapProps {
  selectedLocationId: string | null;
  onSelectLocation: (id: string | null) => void;
}

// MapController manages pan/zoom transitions programmatically in React-Leaflet
function MapController({ selectedLocation }: { selectedLocation: LocationMarker | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.setView([selectedLocation.lat, selectedLocation.lng], 5, {
        animate: true,
        duration: 0.8,
      });
    }
  }, [selectedLocation, map]);

  return null;
}

export default function MigrationMap({ selectedLocationId, onSelectLocation }: MigrationMapProps) {
  // Center coordinates covering Turkey to China
  const centerPosition: [number, number] = [34.0, 70.0];
  const zoomLevel = 4;

  // Render a custom HTML/SVG pin for our vintage styling
  const createCustomIcon = (isSelected: boolean) => {
    return L.divIcon({
      html: `
        <div class="relative flex items-center justify-center -translate-x-[2px] -translate-y-[10px]">
          ${isSelected ? '<span class="absolute w-8 h-8 rounded-full bg-crimson/25 border border-crimson/30 animate-ping"></span>' : ""}
          <span class="absolute w-6 h-6 rounded-full bg-gold/10 scale-0 group-hover:scale-100 transition-all duration-300 border border-gold/20"></span>
          <svg class="w-6 h-6 ${isSelected ? "text-gold scale-125" : "text-crimson"} drop-shadow-md transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
      `,
      className: "custom-marker-icon-container",
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24],
    });
  };

  // Define paths for migrations (lat, lng coords)
  const pathWestward: [number, number][] = locations
    .filter((loc) => ["china", "khorasan", "caucasus", "anatolia", "syria"].includes(loc.id))
    .sort((a, b) => {
      const order = ["china", "khorasan", "caucasus", "anatolia", "syria"];
      return order.indexOf(a.id) - order.indexOf(b.id);
    })
    .map((loc) => [loc.lat, loc.lng]);

  const pathSubcontinent: [number, number][] = [
    locations.find((l) => l.id === "khorasan"),
    locations.find((l) => l.id === "sindh"),
    locations.find((l) => l.id === "gujarat"),
  ]
    .filter((loc): loc is LocationMarker => !!loc)
    .map((loc) => [loc.lat, loc.lng]);

  const pathQezelbash: [number, number][] = [
    locations.find((l) => l.id === "caucasus"),
    locations.find((l) => l.id === "khorasan"),
    locations.find((l) => l.id === "afghanistan"),
  ]
    .filter((loc): loc is LocationMarker => !!loc)
    .map((loc) => [loc.lat, loc.lng]);

  const activeLocation = locations.find((l) => l.id === selectedLocationId) || null;

  return (
    <div className="relative w-full h-[550px] bg-ivory-dark rounded-xl overflow-hidden parchment-border shadow-md select-none">
      
      {/* React-Leaflet Map Container */}
      <MapContainer
        center={centerPosition}
        zoom={zoomLevel}
        minZoom={3}
        maxZoom={10}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* CartoDB Positron - Free Clean Light Tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Dynamic Pan/Zoom Controller */}
        <MapController selectedLocation={activeLocation} />

        {/* Dashed Polylines Tracing Migrations */}
        <Polyline
          positions={pathWestward}
          pathOptions={{
            color: "#D97706", // Gold
            weight: 2.5,
            dashArray: "6, 8",
            lineCap: "round",
          }}
        />
        <Polyline
          positions={pathSubcontinent}
          pathOptions={{
            color: "#991B1B", // Crimson
            weight: 2.5,
            dashArray: "6, 8",
            lineCap: "round",
          }}
        />
        <Polyline
          positions={pathQezelbash}
          pathOptions={{
            color: "#475569", // Slate
            weight: 2,
            dashArray: "4, 6",
            lineCap: "round",
          }}
        />

        {/* Markers */}
        {locations.map((loc) => {
          const isSelected = selectedLocationId === loc.id;
          return (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              icon={createCustomIcon(isSelected)}
              eventHandlers={{
                click: () => {
                  onSelectLocation(loc.id);
                },
              }}
            />
          );
        })}

        {/* Programmatic Single Controlled Popup */}
        {activeLocation && (
          <Popup
            position={[activeLocation.lat, activeLocation.lng]}
            eventHandlers={{
              remove: () => onSelectLocation(null),
            }}
          >
            <div className="max-w-[280px] p-0.5 font-sans">
              <div className="mb-1.5">
                <span className="text-[9px] uppercase font-bold text-gold tracking-wide">
                  {activeLocation.historicalPeriod}
                </span>
                <h4 className="text-sm font-serif font-black text-slate-900 leading-tight">
                  {activeLocation.title}
                </h4>
                <p className="text-[10px] text-slate-500 italic">
                  {activeLocation.subtitle}
                </p>
              </div>
              <div className="text-[11px] text-slate-705 leading-relaxed border-t border-slate-100 pt-1.5 mt-1">
                {activeLocation.description}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1">
                {activeLocation.branches.map((b) => (
                  <span key={b} className="text-[8px] bg-crimson/5 text-crimson px-1.5 py-0.25 rounded border border-crimson/10 font-sans font-semibold">
                    {b}
                  </span>
                ))}
                {activeLocation.empires.map((e) => (
                  <span key={e} className="text-[8px] bg-slate-100 text-slate-650 px-1.5 py-0.25 rounded border border-slate-200/50 font-sans font-semibold">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </Popup>
        )}
      </MapContainer>

      {/* Map Legend panel Overlay */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-ivory/95 border border-slate-200/50 p-3 rounded-lg shadow-md max-w-[200px] pointer-events-auto hidden md:block">
        <h4 className="text-[10px] uppercase font-bold text-slate-900 tracking-wider mb-2 font-serif border-b border-slate-100 pb-1">
          Chronicle Routes
        </h4>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 border-t-2 border-dashed border-gold inline-block" />
            <span className="text-[9px] text-slate-700 font-sans font-medium">Oghuz Westward Path</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 border-t-2 border-dashed border-crimson inline-block" />
            <span className="text-[9px] text-slate-700 font-sans font-medium">Bhayat Subcontinent Path</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 border-t-2 border-dashed border-slate-500 inline-block" />
            <span className="text-[9px] text-slate-700 font-sans font-medium">Qezelbash Relocations</span>
          </div>
        </div>
      </div>

    </div>
  );
}
