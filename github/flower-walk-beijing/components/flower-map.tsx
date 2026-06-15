"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import { flowerSpots } from "@/data/flower-data";

const flowerIcon = L.divIcon({
  className: "",
  html: `<span class="relative flex h-9 w-9 items-center justify-center">
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F3D7D7] opacity-75"></span>
    <span class="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#536A50] text-sm text-white shadow-lg">✿</span>
  </span>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18]
});

function MapFitter() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(flowerSpots.map((spot) => spot.position));
    map.fitBounds(bounds, { padding: [42, 42] });
  }, [map]);

  return null;
}

export function FlowerMap() {
  return (
    <div className="h-[560px] overflow-hidden rounded-panel border border-ink/10 bg-white shadow-soft dark:border-white/10 dark:bg-white/10">
      <MapContainer center={[39.9042, 116.4074]} zoom={11} scrollWheelZoom={false} className="z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapFitter />
        {flowerSpots.map((spot) => (
          <Marker key={spot.id} position={spot.position} icon={flowerIcon}>
            <Popup className="flower-popup">
              <div>
                <h3 className="text-base font-semibold text-ink">{spot.name}</h3>
                <p className="mt-2 text-sm text-ink/70">花种：{spot.flower}</p>
                <p className="text-sm text-ink/70">花期：{spot.season}</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">{spot.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {spot.activities.map((activity) => (
                    <span key={activity} className="rounded-full bg-[#F3D7D7] px-2.5 py-1 text-xs text-ink">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
