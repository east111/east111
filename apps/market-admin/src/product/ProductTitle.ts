import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "snippet";

export const ProductTitle = (record: TProduct): string => {
  return record.snippet || String(record.id);
};
