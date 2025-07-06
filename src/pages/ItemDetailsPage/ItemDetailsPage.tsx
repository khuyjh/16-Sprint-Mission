import { useEffect, useState, type ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProductById, getComments } from "@/api";
import styles from "./ItemDetailsPage.module.css";
import ProductInfo from "./components/ProductInfo";
import clsx from "clsx";
import CommentsList from "./components/CommentsList";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const COMMENTS_LIMIT = 5;

export interface IProduct {
  createdAt: string;
  updatedAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
}

export interface IComment {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface IComments {
  nextCursor: number | null;
  list: IComment[];
}

const ItemDetialsPage = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [comments, setComments] = useState<IComments | null>(null);
  const [commentValue, setCommentValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const intersectionTargetRef = useIntersectionObserver(
    handleLoadMoreComments,
    0.7
  );
  const location = useLocation();
  const { id }: { id: number } = location.state;
  const commentsQuery = {
    productId: id,
    limit: COMMENTS_LIMIT,
    cursor: comments?.nextCursor,
  };

  const loadInitialProduct = async () => {
    const data: IProduct = await getProductById(id);

    if (!data) {
      return;
    }

    setProduct((prev) => data);
  };

  const loadInitialComments = async () => {
    if (comments?.nextCursor === null) {
      return;
    }
    const data: IComments = await getComments(commentsQuery);

    if (!data) {
      return;
    }

    setComments((prev) => data);
  };

  async function handleLoadMoreComments() {
    if (comments?.nextCursor === null) {
      return;
    }
    const data: IComments = await getComments(commentsQuery);

    if (!data) {
      return;
    }

    setComments((prev) => {
      return {
        nextCursor: data.nextCursor,
        list: [...prev!.list, ...data.list],
      };
    });
  }

  useEffect(() => {
    loadInitialProduct();
    loadInitialComments();
  }, []);

  useEffect(() => {
    if (commentValue) {
      setIsDisabled((prev) => false);
    } else {
      setIsDisabled((prev) => true);
    }
  }, [commentValue]);

  if (!product || comments?.nextCursor === undefined) {
    return;
  }
  return (
    <section className={styles.container}>
      <ProductInfo {...product} />
      <hr />
      <div className={styles.returnButtonContainer}>
        <label className={styles.commentLabel} htmlFor="commentArea">
          문의하기
        </label>
        <Link
          to="/items"
          className={clsx("btn primary-btn", styles.returnButton)}
        >
          목록으로 돌아가기 ↩
        </Link>
      </div>
      <textarea
        className={styles.comment}
        id="commentArea"
        value={commentValue}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사항 책임은 게시자에게 있습니다."
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setCommentValue((prev) => e.target.value);
        }}
      />
      <div className={styles.addButtonWrapper}>
        <button
          className={clsx("btn primary-btn", styles.addButton, {
            disabled: isDisabled,
          })}
          disabled={isDisabled}
          type="button"
        >
          등록
        </button>
      </div>
      <CommentsList {...comments} />
      <div
        className={styles.commentObservationTarget}
        ref={intersectionTargetRef}
      >
        문의 사항 무한스크롤 감지 element
      </div>
    </section>
  );
};

export default ItemDetialsPage;
