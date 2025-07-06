import axios from "axios";

// const BASE_URL = "https://panda-market-api.vercel.app/";
const INITIAL_PAGE = 1;
const MOBILE_DEFAULT_PAGE_SIZE = 4;

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 5000,
});

export const getProducts = async ({
  orderBy = "recent",
  currentPage = INITIAL_PAGE,
  pageSize = MOBILE_DEFAULT_PAGE_SIZE,
  keyword = "",
}) => {
  try {
    const response = await instance.get("/products", {
      params: {
        orderBy,
        page: currentPage,
        pageSize,
        keyword: keyword || undefined,
      },
    });

    return response.data;
  } catch (error) {
    console.error("상품 요청 에러:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await instance.get(`/products/${productId}`);

    return response.data;
  } catch (error) {
    console.error("상품 요청 에러:", error);
    throw error;
  }
};

export const getComments = async ({ productId, limit, cursor = 0 }) => {
  try {
    const response = await instance.get(`/products/${productId}/comments`, {
      params: {
        productId,
        limit,
        cursor: cursor || undefined,
      },
    });

    return response.data;
  } catch (error) {
    console.error("댓글 요청 에러:", error);
    throw error;
  }
};
