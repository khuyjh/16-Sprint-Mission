const ArrowButton = ({
  onMovePageList,
  pageListIndex,
  shape,
  direction,
  endIndex,
}) => {
  const handleMovePageList = () => {
    onMovePageList(direction);
  };

  return (
    <button
      className="btn pagination-btn"
      disabled={endIndex === pageListIndex}
      onClick={handleMovePageList}
    >
      {shape}
    </button>
  );
};

export default ArrowButton;
