import { integer, pgTable } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { relations } from "drizzle-orm";
import { suppliers } from "./supplier.sql";

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  supplierId: integer(),
  ...timestamps,
});

export const productsRelations = relations(products, ({ one }) => {
  return {
    supplier: one(suppliers, {
      fields: [products.supplierId],
      references: [suppliers.id],
    }),
  };
});
