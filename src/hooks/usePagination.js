import { useCallback, useEffect, useState } from "react";

const usePagination = (
  BUTTONS_PER_PAGE,
  totalPage,
  breakpoint,
  signalSearch,
  onClickPage
) => {
  const [pageList, setPageList] = useState([[1]]);
  const [pageListIndex, setPageListIndex] = useState(0);

  const resetPagination = useCallback(() => {
    setPageListIndex((prev) => 0);
    onClickPage((prev) => 1);
  }, [onClickPage]);

  const onMovePageList = (direction) => {
    setPageListIndex((prev) => prev + direction);
    onClickPage((prev) => pageList[pageListIndex + direction][0]);
  };

  const calcPageList = useCallback((totalPage) => {
    if (!totalPage) {
      setPageList((prev) => [[1]]);
      return;
    }
    const wholePageList = [];
    const dividedPageList = [];
    let count = 0;

    for (let i = 1; i <= totalPage; i++) {
      if (count === BUTTONS_PER_PAGE) {
        wholePageList.push([...dividedPageList]);
        dividedPageList.splice(0);
        count = 0;
      }
      dividedPageList.push(i);
      count++;
      if (totalPage === i) {
        wholePageList.push([...dividedPageList]);
      }
    }
    setPageList((prev) => [...wholePageList]);
  }, []);

  useEffect(() => {
    calcPageList(totalPage);
  }, [totalPage, calcPageList]);

  useEffect(() => {
    resetPagination();
  }, [signalSearch, breakpoint, resetPagination]);

  return { pageList, pageListIndex, onMovePageList };
};

export default usePagination;
