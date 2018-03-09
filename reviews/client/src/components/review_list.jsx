import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './review_list_entry';
import style from './styles/review_list_style.css';

const ReviewList = (props) => {
  const reviews = [];
  for (let i = 0; i < props.reviews.length; i += 1) {
    reviews.push(<ReviewListEntry review={props.reviews[i]} />);
  }

  return (
    <ul className={style.reviewList}>{reviews}</ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
