import { serial, integer, pgTable, pgSchema, varchar } from "drizzle-orm/pg-core";
export const mySchema = pgSchema("my_schema");
// export const mySchemaUsers = mySchema.table('users', {
export const general = pgTable('general', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    age: integer('age'),
    bio: varchar('bio', { length: 250 })
});
