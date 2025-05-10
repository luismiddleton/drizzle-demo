import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const skuTable = pgTable("skuTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sku: varchar({ length: 10 }),
  quantity: integer().notNull().default(0),
  ...timestamps,
});
