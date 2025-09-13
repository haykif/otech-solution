"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet"; // Ajoute ça pour fixer les icônes

const points: [number, number][] = [
  [46.0626, 6.5736], // Cluses
  [46.1944, 6.2360], // Annemasse
];

function FitToBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(points, { padding: [50, 50] });
  }, [map]);
  return null;
}

export default function Map() {
  useEffect(() => {
    // Fix des icônes Leaflet pour Next.js/Vercel
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("public/assets/marker-icon-2x.png"),
      iconUrl: require("public/assets/marker-icon.png"),
      shadowUrl: require("public/assets/marker-shadow.png"),
    });
  }, []); // Vide pour que ça run qu'une fois

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden z-0">
      <MapContainer
        center={[46.1, 6.4]} // valeur de base (sera remplacée par fitBounds)
        zoom={12}
        minZoom={8}
        maxZoom={18}
        attributionControl={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={points[0]}>
          <Popup>Cluses</Popup>
        </Marker>
        <Marker position={points[1]}>
          <Popup>Annemasse</Popup>
        </Marker>
        <FitToBounds />
      </MapContainer>
    </div>
  );
}