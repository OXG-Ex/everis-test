import {useEffect, useState} from "react";
import {fetchProducts, ProductItem, type Product} from "../../../entities";

export const ProductList = ({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts({search, page, limit})
      .then((data) => {
        console.log(data);
        setProducts(data.items);
        setTotal(data.totalItems);
        setError(null);
      })
      .catch(() => setError("Ошибка загрузки данных"));
  }, [search, page, limit]);

  console.log(products);

  if (error) return <div className="error">{error}</div>;
  return (
    <div>
      <div>
        {products?.map((product) => (
          <ProductItem product={product} key={product.code} />
        ))}
      </div>
      <span>{`Всего: ${total}`}</span>
    </div>
  );
};
