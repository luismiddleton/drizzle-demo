import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const languageTable = pgTable("languages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  ...timestamps,
});
