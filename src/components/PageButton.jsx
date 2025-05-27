const PageButton = ({ pageNumber, selected = false, onClickPage }) => {
  const className = `PageButton ${selected ? "selected" : ""}`;

  const handleClickPage = (e) => {
    onClickPage(e.target.value);
  };

  return (
    <button className={className} value={pageNumber} onClick={handleClickPage}>
      {pageNumber}
    </button>
  );
};

export default PageButton;
