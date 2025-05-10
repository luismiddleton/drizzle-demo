import { integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { relations } from "drizzle-orm";
import { languages } from "./languages.sql";

export const translations = pgTable(
  "translations",
  {
    languageId: integer(),
    textContentId: integer(),
    translation: varchar({ length: 200 }).notNull(),
    ...timestamps,
  },
  (table) => [primaryKey({ columns: [table.languageId, table.textContentId] })]
);

export const translationRelations = relations(translations, ({ many }) => {
  return {
    languages: many(languages),
  };
});
