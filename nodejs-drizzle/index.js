import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { general } from './schema.js';
const connectionString = "postgres://postgres:admin@localhost:5432/postgres";
// const queryClient  = postgres('jdbc:postgresql://localhost:5432/postgres');
const queryClient = postgres(connectionString);
const migrateClient = postgres(connectionString, { max: 1 });
// migrate(drizzle(migrateClient))
migrate(drizzle(migrateClient), { migrationsFolder: "./migrations" });
// console.log(queryClient);
const db = drizzle(queryClient);
// console.log(db);
const arr = await db.select().from(general);
// console.log(arr);
