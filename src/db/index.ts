import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { addresses } from "./schema/addresses.sql";
import { languages } from "./schema/languages.sql";
import { suppliers } from "./schema/supplier.sql";
import { products } from "./schema/products.sql";
import { translations } from "./schema/translations.sql";
import { contents } from "./schema/contents.sql";
import { skus } from "./schema/skus.sql";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    addresses,
    languages,
    suppliers,
    products,
    translations,
    contents,
    skus,
  },
});
