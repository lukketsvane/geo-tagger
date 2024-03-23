export interface Geotag {
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    description: string;
    createdBy: string; // User identifier
    createdAt: Date;
    updatedAt: Date;
  }
  