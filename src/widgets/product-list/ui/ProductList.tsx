import {useUnit} from "effector-react";
import {useEffect, useState} from "react";
import {$error, $products, ProductItem} from "../../../entities/product";
import {fetchDefaultProducts} from "../../../entities/product/model/productModel";

import "../styles/product-list.scss";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export function ProductList() {
  const {error, products} = useUnit({
    products: $products,
    error: $error,
  });

  const isMobile = useIsMobile();

  useEffect(fetchDefaultProducts, []);

  if (error) return <div className="error">{error}</div>;

  if (isMobile) {
    return (
      <div className="product-list-mobile">
        <div className="product-list-mobile__header">
          <span>
            Code / <b>Title</b> / Manufacturer / Description / Price / Stock
          </span>
        </div>
        {products.map((product) => (
          <ProductItem product={product} view="list" key={product.code} />
        ))}
      </div>
    );
  }

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Title</th>
          <th>Manufacturer</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem product={product} view="table" key={product.code} />
        ))}
      </tbody>
    </table>
  );
}
