import { integer, pgTable } from "drizzle-orm/pg-core";

export const productTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
