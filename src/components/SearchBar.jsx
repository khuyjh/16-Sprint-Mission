import { Link } from "react-router-dom";

const SearchBar = ({
  inputValue,
  keyword,
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
    <div>
      <h3>전체 상품</h3>
      <Link to="/additem">
        <button>상품 등록하기</button>
      </Link>
      <input
        value={inputValue}
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleChangeInputValue}
        onKeyDown={handleSearch}
      ></input>
      <select defaultValue="recent" onChange={handleSort}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};

export default SearchBar;
