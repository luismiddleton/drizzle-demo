import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { relations } from "drizzle-orm";
import { translations } from "./translations.sql";

export const languages = pgTable("languages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  code: varchar({ length: 20 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  ...timestamps,
});

export const languageRelations = relations(languages, ({ one }) => {
  return {
    translation: one(translations, {
      fields: [languages.id],
      references: [translations.languageId],
    }),
  };
});
