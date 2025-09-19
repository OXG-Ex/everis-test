import type {FC} from "react";
import type {Product} from "../lib/types";

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({product}) => {
  const {code, description, manufacturer, price, stock, title} = product;
  return (
    <div key={code}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{manufacturer}</span>
      <span>Цена: {price}</span>
      <span>В наличии: {stock}</span>
    </div>
  );
};
