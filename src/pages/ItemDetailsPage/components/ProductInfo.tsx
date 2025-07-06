import { useRef } from "react";
import type { IProduct } from "../ItemDetailsPage";
import styles from "./ProductInfo.module.css";
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
    <section className={styles.container}>
      <img
        className={styles.productImg}
        src={images[0]}
        alt={`${name} 상품 이미지`}
      />
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          {name}
          <UpdateDeleteDropdown />
        </div>
        <div className={styles.price}>{formatNumber(price)}원</div>
        <hr />
        <h6>상품 소개</h6>
        <div className={styles.description}>{description}</div>
        <h6>상품 태그</h6>
        <div className={styles.tagsWrapper}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tagId.current++}>
              {`#${tag}`}
            </span>
          ))}
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.imgNicknameDate}>
            <img src={profileImg} alt="프로필 이미지" />
            <div>
              <div className={styles.nickname}>{ownerNickname}</div>
              <div className={styles.date}>{formatDate(createdAt)}</div>
            </div>
          </div>
          <button className={styles.likeButton} type="button">
            <img
              className={styles.heartIcon}
              src={heartIcon}
              alt="관심상품 하트 아이콘"
            />
            <span>{favoriteCount}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
