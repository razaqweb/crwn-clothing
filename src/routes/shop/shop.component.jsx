import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import ProductCard from "../../Components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Shop;
