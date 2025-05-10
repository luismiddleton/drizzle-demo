import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const languageTable = pgTable("translations", {
  languageId: integer().primaryKey(),
  textContentId: integer().primaryKey(),
  translation: varchar({ length: 200 }).notNull(),
  ...timestamps
});
