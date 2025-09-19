export {fetchProducts} from "./api/api";
export type {Product, ProductResponse} from "./lib/types";
export {ProductItem} from "./ui/ProductItem";

export {
  $error,
  $page,
  $products,
  $search,
  $total,
  fetchProductsFx,
  pageChanged,
  searchChanged,
} from "./model/productModel";
