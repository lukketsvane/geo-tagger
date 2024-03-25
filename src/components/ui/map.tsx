import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap: React.FC = () => {
  // Define the initial position (latitude, longitude) and zoom level for the map
  const position: [number, number] = [51.505, -0.09]; // Example coordinates (London)
  const zoomLevel: number = 13;

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true} style={{ height: '100vh', width: '100vw' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
