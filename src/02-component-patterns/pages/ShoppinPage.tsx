import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";
import useShoppingCart from "../hooks/useShoppingCart";

export default function ShoppinPage() {
  const { onProductCountChange, shoppingCart, products } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>

      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white"></ProductTitle>
            <ProductBottons className="custom-buttons"></ProductBottons>
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            style={{ width: "100px" }}
            className="bg-dark"
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductBottons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
