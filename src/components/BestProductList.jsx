import ProductCard from "./ProductCard";
import styles from "./BestProductList.module.css";

const BestProductList = ({ bestProducts }) => {
  return (
    <section className={styles.container}>
      <h3>베스트 상품</h3>
      <div className={styles["card-container"]}>
        {bestProducts.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default BestProductList;
