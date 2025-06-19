import styles from "./PageButton.module.css";

const PageButton = ({ pageNumber, selected = false, onClickPage }) => {
  const className = styles[`${selected ? "selected" : ""}`];

  const handleClickPage = (e) => {
    onClickPage(Number(e.target.value));
  };

  return (
    <button
      className={`btn pagination-btn ${className}`}
      value={pageNumber}
      onClick={handleClickPage}
    >
      {pageNumber}
    </button>
  );
};

export default PageButton;
