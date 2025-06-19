import styles from "./ProductCard.module.css";

const ProductCard = ({ images, name, price, favoriteCount }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={images[0]} />
      <p className={styles["product-name"]}>{name}</p>
      <p className={styles.price}>{price.toLocaleString()}원</p>
      <p className={styles["favorite-count"]}>♡ {favoriteCount}</p>
    </div>
  );
};

export default ProductCard;
