export {fetchProducts} from "./api/api";
export type {Product, ProductResponse} from "./lib/types";
export {ProductItem} from "./ui/ProductItem";

export {
  $error,
  $limit,
  $page,
  $products,
  $search,
  $total,
  fetchProductsFx,
  limitChanged,
  pageChanged,
  searchChanged,
} from "./model/productModel";
