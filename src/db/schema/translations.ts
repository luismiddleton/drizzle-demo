import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const languageTable = pgTable("translations", {
  languageId: integer().primaryKey(),
  textContentId: integer().primaryKey(),
  translation: varchar({ length: 200 }).notNull(),
});
