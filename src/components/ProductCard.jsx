import "./ProductCard.css";

const ProductCard = ({ images, name, price, favoriteCount }) => {
  return (
    <div className="card">
      <img className="img" src={images[0]} />
      <p>{name}</p>
      <p>{price.toLocaleString()}</p>
      <p>♡{favoriteCount}</p>
    </div>
  );
};

export default ProductCard;
