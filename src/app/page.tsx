// src/app/page.tsx
"use client";

import React from 'react';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button'; // Assuming your Button component's path
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCenter: [number, number] = [51.505, -0.09]; // Example: London's latitude and longitude
const defaultZoom: number = 13;

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div style={{ height: "100vh" }}> {/* Fullscreen Map Container */}
          <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Add more layers (Markers, Popups, etc.) here as needed */}
          </MapContainer>
        </div>
      </SignedIn>
    </div>
  );
}
