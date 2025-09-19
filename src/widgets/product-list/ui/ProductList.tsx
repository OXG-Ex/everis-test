import {useUnit} from "effector-react";
import {useEffect, useState} from "react";
import {$error, $products, ProductItem} from "../../../entities/product";
import {fetchDefaultProducts} from "../../../entities/product/model/productModel";

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
        {products.map((product) => (
          <div key={product.code} className="product-item">
            <ProductItem product={product} view="list" />
          </div>
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
