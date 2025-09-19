import type {FC} from "react";
import type {Product} from "../lib/types";

interface ProductItemProps {
  product: Product;
  view: "table" | "list";
}

export const ProductItem: FC<ProductItemProps> = ({product, view}) => {
  if (view === "table") {
    return (
      <tr className="product-item product-item--table">
        <td>{product.code}</td>
        <td>{product.title}</td>
        <td>{product.manufacturer}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
      </tr>
    );
  }

  return (
    <div className="product-item product-item--list">
      <div className="product-item__row">
        <b>
          {product.code}{" "}
          <span className="product-item__title">{product.title}</span>
        </b>
        <span className="product-item__manufacturer">
          | {product.manufacturer}
        </span>
      </div>
      <div className="product-item__desc">{product.description}</div>
      <div className="product-item__bottom">
        <span>{product.price}Р</span>
        <span> | </span>
        <span>{product.stock}</span>
      </div>
    </div>
  );
};
