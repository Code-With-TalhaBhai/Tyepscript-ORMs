-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations

CREATE TABLE IF NOT EXISTS "general" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"age" integer,
	"bio" varchar(250)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "soldier" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"age" integer,
	"rank" text
);