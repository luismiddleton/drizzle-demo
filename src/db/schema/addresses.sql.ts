import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const addresses = pgTable("addresses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  lineOne: varchar({ length: 200 }),
  lineTwo: varchar({ length: 200 }),
  lineThree: varchar({ length: 200 }),
  province: varchar({ length: 200 }),
  zip: varchar({ length: 200 }),
  country: varchar({ length: 200 }),
  ...timestamps,
});
