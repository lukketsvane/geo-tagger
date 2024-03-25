// convex/placePin.ts
import { mutation } from "./_generated/server";

// Corrected to accept a single object argument with lat, lng, and message properties
export default mutation(async ({ db }, { lat, lng, message }: { lat: number; lng: number; message: string }) => {
  // Insertion logic remains the same
  return await db.insert("markers", {
    lat,
    lng,
    message,
  });
});
