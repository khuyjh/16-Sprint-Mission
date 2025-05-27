import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import PaginationNav from "./PaginationNav";
import "./AllProductList.css";

const calcTotalPage = (totalCount, pageSize) =>
  Math.ceil(totalCount / pageSize);

const AllProductList = ({
  products,
  totalCount,
  pageSize,
  currentPage,
  breakpoint,
  onClickPage,
  onSort,
}) => {
  return (
    <section>
      <SearchBar onSort={onSort} />
      <div className="card-container--all">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <PaginationNav
        onClickPage={onClickPage}
        totalPage={calcTotalPage(totalCount, pageSize)}
        currentPage={currentPage}
        breakpoint={breakpoint}
      />
    </section>
  );
};

export default AllProductList;
