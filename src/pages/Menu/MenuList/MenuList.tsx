import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";

export const MenuList = ({ products }: MenuListProps) => {
  return products.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.name}
      description={product.ingredients.join(", ")}
      rating={product.rating}
      price={product.price / 10}
      image={product.image}
    />
  ));
};
