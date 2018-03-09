import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/pagination_style.css';

const Pagination = (props) => {
  const pages = Math.ceil(props.reviewCount / 20);
  const pageDivs = Array(pages).fill(null).map((element, i) => {
    const pageStyle = i + 1 === props.currentPage ? style.currentPage : style.page;
    return (
      <span onClick={e => props.clickPage(i + 1)} className={pageStyle}>{i + 1}</span>
    );
  });
  let previous = null;
  let next = null;
  if (props.currentPage > 1) {
    previous = (
      <span className={style.previousPage} onClick={e => props.clickPage(Math.max(props.currentPage - 1, 1))}>  
        <span className={style.icons}>{'<'}</span>
        <span>Previous</span>
      </span>
    );
  }

  if (props.currentPage < pages) {
    next = (
      <span className={style.nextPage} onClick={e => props.clickPage(Math.min(props.currentPage + 1, pages))}>
        <span>Next</span>
        <span className={style.icons}>{'>'}</span>
      </span>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.text}>{`Page ${props.currentPage} of ${pages}`}</div>
      <div className={style.pageContainer}>
        {previous}
        {pageDivs}
        {next}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  clickPage: PropTypes.func.isRequired,
};

export default Pagination;
