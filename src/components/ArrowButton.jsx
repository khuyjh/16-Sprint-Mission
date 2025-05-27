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
    <button disabled={endIndex === pageListIndex} onClick={handleMovePageList}>
      {shape}
    </button>
  );
};

export default ArrowButton;
