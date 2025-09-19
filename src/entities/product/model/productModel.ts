import {createEffect, createEvent, createStore, sample} from "effector";
import {fetchProducts, type Product} from "..";

export const searchChanged = createEvent<string>();
export const pageChanged = createEvent<number>();
export const limitChanged = createEvent<number>();

export const fetchDefaultProducts = createEvent();

export const fetchProductsFx = createEffect(
  async (params: {search: string; page: number; limit: number}) => {
    return await fetchProducts(params);
  }
);

export const $search = createStore("").on(searchChanged, (_, s) => s);
export const $page = createStore(1).on(pageChanged, (_, p) => p);
export const $limit = createStore(10).on(limitChanged, (_, l) => l);

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

$limit.on(limitChanged, (_, payload) => payload);

sample({
  clock: [limitChanged, pageChanged, searchChanged],
  source: {limit: $limit, page: $page, search: $search},
  target: fetchProductsFx,
});

sample({
  clock: fetchDefaultProducts,
  fn: () => ({search: "", page: 0, limit: 10}),
  target: fetchProductsFx,
});
