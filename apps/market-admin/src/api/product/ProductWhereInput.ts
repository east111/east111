import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  price?: FloatFilter;
  snippet?: StringFilter;
};
