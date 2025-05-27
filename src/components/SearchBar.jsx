import { Link } from "react-router-dom";

const SearchBar = ({ onSort }) => {
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <div>
      <h3>전체 상품</h3>
      <Link to="/additem">
        <button>상품 등록하기</button>
      </Link>
      <input placeholder="검색할 상품을 입력해주세요"></input>
      <select defaultValue="recent" onChange={handleSort}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};

export default SearchBar;
