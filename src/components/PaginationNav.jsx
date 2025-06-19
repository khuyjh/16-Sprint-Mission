import { useCallback, useEffect, useState } from "react";
import ArrowButton from "./ArrowButton";
import PageButton from "./PageButton";
import styles from "./PaginationNav.module.css";
import usePagination from "./hooks/UsePagination";

const PaginationNav = ({
  signalSearch,
  onClickPage,
  totalPage,
  currentPage,
  breakpoint,
}) => {
  const { pageList, pageListIndex, onMovePageList } = usePagination(
    totalPage,
    breakpoint,
    signalSearch,
    onClickPage
  );
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
