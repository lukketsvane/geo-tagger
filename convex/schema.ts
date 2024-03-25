import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  markers: defineTable({
    lat: v.float64(),
    lng: v.float64(),
    message: v.string(),
  }),
});