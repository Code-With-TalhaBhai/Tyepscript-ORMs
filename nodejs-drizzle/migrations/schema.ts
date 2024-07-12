import { pgTable, serial, varchar, integer, text } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const general = pgTable("general", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 50 }).notNull(),
	age: integer("age"),
	bio: varchar("bio", { length: 250 }),
});

export const soldier = pgTable("soldier", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 50 }).notNull(),
	age: integer("age"),
	rank: text("rank"),
});