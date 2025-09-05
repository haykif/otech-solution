"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngBoundsExpression, LatLngExpression } from "leaflet";

export default function Map() {
  // Limites de navigation pour la Haute-Savoie
  const hauteSavoieBounds: LatLngBoundsExpression = [
    [45.7, 6.0],   // Sud-ouest (Annecy)
    [46.5, 7.2]    // Nord-est (Chamonix)
  ];

  // Coordonnées précises des adresses (DMS converties en décimal)
  // Annemasse: 46°11'59"N 6°14'21"E -> 46.199722, 6.239167
  const annemasse: LatLngExpression = [46.199722, 6.239167];
  // Cluses: 46°04'06"N 6°34'25"E -> 46.068333, 6.573611
  const cluses: LatLngExpression = [46.068333, 6.573611];

  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
      <MapContainer
        center={[46.1339, 6.4064]}
        zoom={10}
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
        <Marker position={cluses}>
          <Popup>
            1 Rue Raymond Poincaré, 74300 Cluses
          </Popup>
        </Marker>
        <Marker position={annemasse}>
          <Popup>
            3 Rue des Frères Tassil, 74100 Annemasse
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
