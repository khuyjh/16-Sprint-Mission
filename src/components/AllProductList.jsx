import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import PaginationNav from "./PaginationNav";
import "./AllProductList.css";
import { useState } from "react";

const calcTotalPage = (totalCount, pageSize) =>
  Math.ceil(totalCount / pageSize);

const AllProductList = ({
  products,
  totalCount,
  pageSize,
  currentPage,
  breakpoint,
  inputValue,
  keyword,
  onClickPage,
  onSort,
  onChangeInputValue,
  onSearch,
}) => {
  const [signalSearch, setSignalSearch] = useState(0);

  return (
    <section>
      <SearchBar
        inputValue={inputValue}
        keyword={keyword}
        onSort={onSort}
        onChangeInputValue={onChangeInputValue}
        onSearch={onSearch}
        setSignalSearch={setSignalSearch}
      />
      <div className="card-container--all">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
        {!products.length && <div>일치하는 상품이 없습니다</div>}
      </div>
      <PaginationNav
        signalSearch={signalSearch}
        onClickPage={onClickPage}
        totalPage={calcTotalPage(totalCount, pageSize)}
        currentPage={currentPage}
        breakpoint={breakpoint}
      />
    </section>
  );
};

export default AllProductList;
