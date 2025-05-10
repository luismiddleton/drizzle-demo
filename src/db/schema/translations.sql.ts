import { integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const languageTable = pgTable(
  "translations",
  {
    languageId: integer(),
    textContentId: integer(),
    translation: varchar({ length: 200 }).notNull(),
    ...timestamps,
  },
  (table) => [primaryKey({ columns: [table.languageId, table.textContentId] })]
);
