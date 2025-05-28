import { useCallback, useEffect, useState } from "react";
import ArrowButton from "./ArrowButton";
import PageButton from "./PageButton";
import styles from "./PaginationNav.module.css";

const PaginationNav = ({
  signalSearch,
  onClickPage,
  totalPage,
  currentPage,
  breakpoint,
}) => {
  const [pageList, setPageList] = useState([[1]]);
  const [pageListIndex, setPageListIndex] = useState(0);
  const PrevArrowButton = {
    shape: "<",
    direction: -1,
    endIndex: 0,
  };
  const NextArrowButton = {
    shape: ">",
    direction: 1,
    endIndex: pageList.length - 1,
  };

  const resetPagination = useCallback(() => {
    setPageListIndex((prev) => 0);
    onClickPage((prev) => 1);
  }, [onClickPage]);

  const onMovePageList = (direction) => {
    setPageListIndex((prev) => prev + direction);
    onClickPage((prev) => pageList[pageListIndex + direction][0]);
  };

  const calcPageList = (totalPage) => {
    if (!totalPage) {
      setPageList((prev) => [[1]]);
      return;
    }
    const WholePageList = [];
    const dividedPageList = [];
    let count = 0;

    for (let i = 1; i <= totalPage; i++) {
      if (count === 5) {
        WholePageList.push([...dividedPageList]);
        dividedPageList.splice(0);
        count = 0;
      }
      dividedPageList.push(i);
      count++;
      if (totalPage === i) {
        WholePageList.push([...dividedPageList]);
      }
    }
    setPageList((prev) => [...WholePageList]);
  };

  useEffect(() => {
    calcPageList(totalPage);
  }, [totalPage]);

  useEffect(() => {
    resetPagination();
  }, [signalSearch, breakpoint, resetPagination]);

  return (
    <div className={styles.container}>
      <ArrowButton
        onMovePageList={onMovePageList}
        pageListIndex={pageListIndex}
        {...PrevArrowButton}
      />
      {pageList[pageListIndex].map((pageNumber) => {
        return (
          <PageButton
            key={pageNumber}
            pageNumber={pageNumber}
            selected={pageNumber === currentPage}
            onClickPage={onClickPage}
          />
        );
      })}
      <ArrowButton
        onMovePageList={onMovePageList}
        pageListIndex={pageListIndex}
        {...NextArrowButton}
      />
    </div>
  );
};

export default PaginationNav;
