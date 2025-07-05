import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getProductById, getComments } from "@/api";
import ProductInfo from "./components/ProductInfo";
import clsx from "clsx";
import CommentsList from "./components/CommentsList";

const COMMENTS_LIMIT = 50;

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
  const currentCursor = useRef<number | null>(0);
  const location = useLocation();
  const { id }: { id: number } = location.state;
  const commentsQuery = {
    productId: id,
    limit: COMMENTS_LIMIT,
    cursor: currentCursor.current,
  };

  const handleLoadProduct = useCallback(async () => {
    const data: IProduct = await getProductById(id);

    if (!data) {
      return;
    }

    setProduct((prev) => data);
  }, [id]);

  const handleLoadComments = useCallback(async () => {
    if (currentCursor.current === null) {
      return;
    }

    const data: IComments = await getComments(commentsQuery);

    if (!data) {
      return;
    }

    if (currentCursor.current === 0) {
      setComments((prev) => data);
    } else {
      setComments((prev): IComments => {
        return {
          nextCursor: data.nextCursor,
          list: [...prev!.list, ...data.list],
        };
      });
    }
    currentCursor.current = data.nextCursor;
  }, [id]);

  useEffect(() => {
    handleLoadProduct();
    handleLoadComments();
  }, [handleLoadProduct, handleLoadComments]);

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
    <>
      <ProductInfo {...product} />
      <div>
        <label htmlFor="commentArea">문의하기</label>
        <Link to="/items" className={clsx("btn primary-btn")}>
          목록으로 돌아가기 ↩
        </Link>
      </div>
      <textarea
        id="commentArea"
        value={commentValue}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사항 책임은 게시자에게 있습니다."
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setCommentValue((prev) => e.target.value);
        }}
      />
      <button
        className={clsx("btn primary-btn", {
          disabled: isDisabled,
        })}
        disabled={isDisabled}
        type="button"
      >
        등록
      </button>
      <CommentsList {...comments} currentCursor={currentCursor} />
    </>
  );
};

export default ItemDetialsPage;
