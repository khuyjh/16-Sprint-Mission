import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import PaginationNav from "./PaginationNav";
import styles from "./AllProductList.module.css";
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
  orderBy,
  onClickPage,
  onSort,
  onChangeInputValue,
  onSearch,
}) => {
  const [signalSearch, setSignalSearch] = useState(0);

  return (
    <section className={styles.container}>
      <SearchBar
        inputValue={inputValue}
        keyword={keyword}
        orderBy={orderBy}
        onSort={onSort}
        onChangeInputValue={onChangeInputValue}
        onSearch={onSearch}
        setSignalSearch={setSignalSearch}
      />
      <div className={styles["card-container"]}>
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      {!products.length && (
        <div className={styles.alert}>관련 상품이 없어요😥</div>
      )}
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
