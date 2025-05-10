import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const contentTable = pgTable("contents", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  originalText: varchar({ length: 200 }).notNull(),
  originalLanguageId: integer(),
});
