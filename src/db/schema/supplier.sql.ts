import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { relations } from "drizzle-orm";
import { products } from "./products.sql";

export const suppliers = pgTable("suppliers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }),
  ...timestamps,
});

export const suppliersRelations = relations(suppliers, ({ many }) => {
  return {
    products: many(products),
  };
});
