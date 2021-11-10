import {
  ProductCard,
  ProductImage,
  ProductBottons,
  ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffe Mug - Card",
};

export default function ShoppinPage() {
  return (
    <div>
      <h1>Shopping Store</h1>

      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductBottons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
}
