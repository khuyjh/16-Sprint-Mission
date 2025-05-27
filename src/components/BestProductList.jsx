import ProductCard from "./ProductCard";
import "./BestProductList.css";

const BestProductList = ({ bestProducts }) => {
  return (
    <section>
      <h3>베스트 상품</h3>
      <div className="card-container">
        {bestProducts.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default BestProductList;
