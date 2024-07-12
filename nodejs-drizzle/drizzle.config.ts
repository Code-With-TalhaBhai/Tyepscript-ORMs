import type { Config } from "drizzle-kit";
 
export default {
  schema: "./schema.js",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
   connectionString:"postgres://postgres:admin@localhost:5432/postgres"
  }
} satisfies Config;