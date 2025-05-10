import { decimal, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const skus = pgTable("skus", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sku: varchar({ length: 10 }),
  price: decimal().notNull(),
  quantity: integer().notNull().default(0),
  ...timestamps,
});
