import Nav from "../components/Nav";
import BestProductList from "../components/BestProductList";
import AllProductList from "../components/AllProductList";
import useBreakpoint from "../components/hooks/useBreakpoint";
import { getProducts } from "../api";
import { useState, useEffect, useCallback } from "react";
import "./Item.css";

function Item() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [orderBy, setOrderBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const { breakpoint, pageSize, bestProductsPageSize } = useBreakpoint();

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
    handleLoad({ orderBy, currentPage, pageSize });
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
        onClickPage={setCurrentPage}
        onSort={setOrderBy}
      />
    </div>
  );
}

export default Item;
