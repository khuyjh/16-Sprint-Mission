import Nav from "../components/Nav";
import BestProductList from "../components/BestProductList";
import AllProductList from "../components/AllProductList";
import useBreakpoint from "../components/hooks/useBreakpoint";
import { getProducts } from "../api";
import { useState, useEffect, useCallback, useRef } from "react";
import "./Item.css";

function Item() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [orderBy, setOrderBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const { breakpoint, pageSize, bestProductsPageSize } = useBreakpoint();
  const keyword = useRef("");

  const onSearch = () => {
    handleLoad({ orderBy, pageSize, keyword: keyword.current });
  };

  const handleLoad = useCallback(async (...args) => {
    const result = await getProducts(...args);
    if (!result) {
      return;
    }

    const { list, totalCount } = result;
    if ("loadBest" in args[0]) {
      setBestProducts((prev) => [...list]);
      return;
    }
    setProducts((prev) => [...list]);
    setTotalCount((prev) => totalCount);
  }, []);

  useEffect(() => {
    handleLoad({
      loadBest: "",
      orderBy: "favorite",
      pageSize: bestProductsPageSize,
    });
  }, [bestProductsPageSize, handleLoad]);

  useEffect(() => {
    handleLoad({ orderBy, currentPage, pageSize, keyword: keyword.current });
  }, [orderBy, currentPage, pageSize, handleLoad]);

  return (
    <div className="Item">
      <Nav />
      <BestProductList bestProducts={bestProducts} />
      <AllProductList
        products={products}
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        breakpoint={breakpoint}
        inputValue={inputValue}
        keyword={keyword}
        onClickPage={setCurrentPage}
        onSort={setOrderBy}
        onChangeInputValue={setInputValue}
        onSearch={onSearch}
      />
    </div>
  );
}

export default Item;
