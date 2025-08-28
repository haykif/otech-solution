"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBoundsExpression } from "leaflet";

export default function Map() {
  // Limites de navigation pour la Haute-Savoie
  const hauteSavoieBounds: LatLngBoundsExpression = [
    [45.7, 6.0],   // Sud-ouest (Annecy)
    [46.5, 7.2]    // Nord-est (Chamonix)
  ];

  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
      <MapContainer
        center={[46.1, 6.6]}
        zoom={9}
        minZoom={8}
        maxZoom={18}
        attributionControl={false}
        maxBounds={hauteSavoieBounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
