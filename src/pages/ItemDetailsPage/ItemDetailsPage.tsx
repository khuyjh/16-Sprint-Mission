import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { getProductById, getComments } from "@/api";
import ProductInfo from "./components/ProductInfo";

const COMMENTS_LIMIT = 5;

export interface Product {
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

interface Comment {
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

interface Comments {
  nextCursor: number | null;
  list: Comment[];
}

const ItemDetialsPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [comments, setComments] = useState<Comments | null>(null);
  const currentCursor = useRef<number | null>(0);
  const location = useLocation();
  const { id }: { id: number } = location.state;
  const commentsQuery = {
    productId: id,
    limit: COMMENTS_LIMIT,
    cursor: currentCursor.current,
  };

  const handleLoadProduct = async () => {
    const data: Product = await getProductById(id);

    if (!data) {
      return;
    }

    setProduct((prev) => data);
  };

  const handleLoadComments = async () => {
    if (currentCursor.current === null) {
      return;
    }

    const data: Comments = await getComments(commentsQuery);

    if (!data) {
      return;
    }

    if (currentCursor.current === 0) {
      setComments((prev) => data);
    } else {
      setComments((prev): Comments => {
        return {
          nextCursor: data.nextCursor,
          list: [...prev!.list, ...data.list],
        };
      });
    }
    currentCursor.current = data.nextCursor;
  };

  useEffect(() => {
    handleLoadProduct();
    handleLoadComments();
  }, []);

  if (!product) {
    return;
  }
  return (
    <>
      <ProductInfo {...product} />
      {comments?.list.map((comment: Comment): ReactNode => {
        return <div key={comment.id}>{comment.content}</div>;
      })}
      <button
        onClick={() => {
          handleLoadComments();
        }}
      >
        zmfflr
      </button>
    </>
  );
};

export default ItemDetialsPage;
