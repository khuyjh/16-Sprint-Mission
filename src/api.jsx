const BASE_URL = "https://panda-market-api.vercel.app/";

export const getProducts = async ({
  orderBy = "recent",
  currentPage = 1,
  pageSize = 4,
  keyword = "",
}) => {
  const query = `orderBy=${orderBy}&page=${currentPage}&pageSize=${pageSize}${
    keyword ? `&keyword=${keyword}` : ""
  }`;
  const response = await fetch(`${BASE_URL}products?${query}`);
  if (!response.ok) {
    throw new Error("항목을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
};
