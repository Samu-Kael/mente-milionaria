import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite", 
  schema: "./src/infrastructure/database/schemas/schemas.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "file:database.sqlite", // Alinhado com o seu novo client.ts
  },
});