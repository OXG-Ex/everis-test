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
      <div>
        <b>Code:</b> {product.code}
      </div>
      <div>
        <b>Name:</b> {product.title}
      </div>
      <div>
        <b>Manufacturer:</b> {product.manufacturer}
      </div>
      <div>
        <b>Description:</b> {product.description}
      </div>
      <div>
        <b>Price:</b> {product.price}
      </div>
      <div>
        <b>Stock:</b> {product.stock}
      </div>
    </div>
  );
};
