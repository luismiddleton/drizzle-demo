import { integer, pgTable } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const productTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ...timestamps
});
