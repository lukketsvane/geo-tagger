"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useQuery, useMutation } from 'convex/react';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button'; 
import getMarkers from '../../convex/getMarkers';
import placePin from '../../convex/placePin';

const markers = useQuery(getMarkers);
const addMarker = useMutation(placePin);

const defaultCenter = [51.505, -0.09];
const defaultZoom = 13;
const pinIcon = L.icon({
  iconUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📍</text></svg>',
  iconSize: [38, 38], // Adjust size as needed
  iconAnchor: [19, 38], // Adjust anchor point as needed
});

type AddPinOnClickProps = {
  addMarker: (args: { lat: number; lng: number; message: string }) => Promise<void>;
};

function AddPinOnClick({ addMarker }: AddPinOnClickProps) {
  useMapEvents({
    click(e) {
      const message = prompt('Enter a message for this pin:');
      if (message) {
        addMarker({ lat: e.latlng.lat, lng: e.latlng.lng, message }).catch(console.error);
      }
    },
  });
  return null;
}

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div style={{ height: "90vh" }}>
          <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers && markers.map((marker, idx) => (
              <Marker
                key={idx}
                position={[marker.lat, marker.lng]}
                // Assuming pinIcon is defined
                icon={pinIcon}>
                <Popup>{marker.message}</Popup>
              </Marker>
            ))}
            <AddPinOnClick addMarker={addMarker} />
          </MapContainer>
        </div>
      </SignedIn>
    </div>
  );
}
