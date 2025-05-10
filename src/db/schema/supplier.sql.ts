import { integer, pgTable } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const supplierTable = pgTable("suppliers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ...timestamps
});
