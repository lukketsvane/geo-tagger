// convex/getMarkers.ts
import { query } from "./_generated/server";

export default query(async ({ db }) => {
  return await db.query("markers").collect();
});
