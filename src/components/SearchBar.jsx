import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
import searchIcon from "../assets/icons/ic_search.svg";

const SearchBar = ({
  inputValue,
  keyword,
  orderBy,
  onSort,
  onChangeInputValue,
  onSearch,
  setSignalSearch,
}) => {
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  const handleChangeInputValue = (e) => {
    onChangeInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      keyword.current = inputValue;
      onSearch();
      setSignalSearch((prev) => prev + 1);
    }
  };
  return (
    <div className={styles.container}>
      <h3>전체 상품</h3>
      <Link className={styles["btn-wrapper"]} to="/additem">
        <button className={`btn primary-btn ${styles["additem-btn"]}`}>
          상품 등록하기
        </button>
      </Link>
      <div className={styles["input-container"]}>
        <input
          className={styles.input}
          value={inputValue}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleChangeInputValue}
          onKeyDown={handleSearch}
        ></input>
        <img
          className={styles["search-icon"]}
          src={searchIcon}
          alt="돋보기 모양 검색 아이콘"
        />
      </div>
      <select
        className={styles["order-select"]}
        value={orderBy}
        onChange={handleSort}
      >
        <option value="" disabled hidden></option>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};

export default SearchBar;
