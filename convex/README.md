import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAuth } from "@clerk/nextjs";

const MapComponent: React.FC = () => {
  const mapRef = useRef(null);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn && mapRef.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
    }
  }, [isSignedIn]);

  if (!isSignedIn) return null;

  return (
    <div id="map" ref={mapRef} style={{ height: '100vh', width: '100vw' }} />
  );
};

export default MapComponent;
