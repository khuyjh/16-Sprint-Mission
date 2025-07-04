import { useRef } from "react";
import type { IProduct } from "../ItemDetailsPage";
import formatNumber from "@/utils/formatNumber";
import profileImg from "@/assets/icons/ic_profile.svg";
import heartIcon from "@/assets/icons/ic_heart.svg";
import UpdateDeleteDropdown from "./UpdateDeleteDropdown";
import formatDate from "@/utils/formatDate";

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
}: IProduct) => {
  const tagId = useRef(0);

  return (
    <section>
      <img src={images[0]} alt={`${name} 상품 이미지`} />
      <div>
        <div>
          {name}
          <UpdateDeleteDropdown />
        </div>
        <div>{formatNumber(price)}원</div>
        <hr />
        <h6>상품 소개</h6>
        <div>description</div>
        <h6>상품 태그</h6>
        {tags.map((tag) => (
          <span key={tagId.current++}>{tag}</span>
        ))}
        <div>
          <img src={profileImg} alt="프로필 이미지" />
          <div>
            <div>{ownerNickname}</div>
            <div>{formatDate(createdAt)}</div>
          </div>
          <button>
            <img src={heartIcon} alt="관심상품 하트 아이콘" />
            <div>{favoriteCount}</div>
          </button>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default ProductInfo;
