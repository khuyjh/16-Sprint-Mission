import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ id, images, name, price, favoriteCount }) => {
  return (
    <Link className={styles.card} to={`/items/${id}`} state={{ id }}>
      <img className={styles.img} src={images[0]} />
      <p className={styles["product-name"]}>{name}</p>
      <p className={styles.price}>{price.toLocaleString()}원</p>
      <p className={styles["favorite-count"]}>♡ {favoriteCount}</p>
    </Link>
  );
};

export default ProductCard;
