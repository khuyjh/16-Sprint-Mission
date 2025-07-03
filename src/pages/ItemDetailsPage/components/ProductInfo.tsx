import type { Product } from "../ItemDetailsPage";
import formatNumber from "../../../utils/formatNumber";
import profileImg from "../../../assets/icons/ic_profile.svg";
import heartIcon from "../../../assets/icons/ic_heart.svg";

const ProductInfo = ({
  createdAt,
  updatedAt,
  favoriteCount,
  ownerNickname,
  ownerId,
  images,
  tags,
  price,
  description,
  name,
  id,
  isFavorite,
}: Product) => {
  return (
    <section>
      <img src={images[0]} alt={`${name} 상품 이미지`} />
      <div>
        <div>{name}</div>
        <div>{formatNumber(price)}원</div>
        <hr />
        <h6>상품 소개</h6>
        <div>description</div>
        <h6>상품 태그</h6>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
        <div>
          <img src={profileImg} alt="프로필 이미지" />
          <div>
            <div>{ownerNickname}</div>
            <div>{createdAt}</div>
          </div>
          <div>
            <img src={heartIcon} alt="관심상품 하트 아이콘" />
            <div>{favoriteCount}</div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default ProductInfo;
