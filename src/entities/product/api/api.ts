import axios from "axios";
import type {ProductResponse} from "../lib/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_LOGIN = import.meta.env.VITE_API_LOGIN;
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

export async function fetchProducts({
  search = "",
  page = 1,
  limit = 10,
}: {
  search?: string;
  page?: number;
  limit?: number;
}) {
  const params: Record<string, number | string> = {
    Skip: (page - 1) * limit,
    Take: limit,
  };
  if (search) {
    params.Filter = search;
  }

  try {
    const response = await axios.get<ProductResponse>(` ${API_URL}/v1/Stock`, {
      params,
      auth: {
        username: API_LOGIN,
        password: API_PASSWORD,
      },
    });
    return response.data;
  } catch {
    throw new Error("Ошибка загрузки данных");
  }
}
