import XIcon from "../assets/icons/ic_X.svg";

const XButton = ({ onClick, value = null, className = "btn" }) => {
  return (
    <button
      style={{ height: "24px" }}
      className={className}
      value={value}
      type="button"
      onClick={onClick}
    >
      <img src={XIcon} alt="삭제 버튼" />
    </button>
  );
};

export default XButton;
