import {createEffect, createEvent, createStore, sample} from "effector";
import {fetchProducts, type Product} from "..";
import type {Search} from "../lib/types";

export const searchChanged = createEvent<Search>();
export const pageChanged = createEvent<number>();

export const fetchDefaultProducts = createEvent();

export const fetchProductsFx = createEffect(
  async (params: {searchText: string; page: number; limit: number}) => {
    return await fetchProducts(params);
  }
);

export const $search = createStore<Search>({limit: 10, searchText: ""}).on(
  searchChanged,
  (_, s) => s
);
export const $page = createStore(1).on(pageChanged, (_, p) => p);

export const $products = createStore<Product[]>([]).on(
  fetchProductsFx.doneData,
  (_, data) => data.items
);

export const $total = createStore(0).on(
  fetchProductsFx.doneData,
  (_, data) => data.totalItems
);

export const $error = createStore<string | null>(null)
  .on(fetchProductsFx.fail, () => "Ошибка загрузки данных")
  .reset(fetchProductsFx.doneData);

$search.on(searchChanged, (_, payload) => payload);

$page.on(pageChanged, (_, payload) => payload);

sample({
  clock: [pageChanged, searchChanged],
  source: {page: $page, search: $search},
  fn({page, search}) {
    return {searchText: search.searchText, page: page, limit: search.limit};
  },
  target: fetchProductsFx,
});

sample({
  clock: fetchDefaultProducts,
  fn: () => ({searchText: "", page: 0, limit: 10}),
  target: fetchProductsFx,
});
