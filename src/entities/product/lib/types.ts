export interface Product {
  code: string;
  title: string;
  manufacturer: string;
  description: string;
  price: string;
  stock: number;
}

export interface ProductResponse {
  totalItems: number;
  items: Product[];
}

export interface Search {
  searchText: string;
  limit: number;
}
