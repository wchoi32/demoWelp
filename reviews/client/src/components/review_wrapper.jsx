import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_wrapper_style.css';
import Votes from './votes';
import ReviewHeader from './review_header';
import Pictures from './pictures';

const ReviewWrapper = (props) => {
  return (
    <div className={style.reviewWrapper}>
      <ReviewHeader rating={props.review.businessRating} date={props.review.dateCreated} />
      <div className={style.reviewText} dangerouslySetInnerHTML={{ __html: props.review.text }}></div>
      <Pictures images={props.review.images} />
      <Votes votes={props.review.reviewRating} />
    </div>
  );
};

ReviewWrapper.propTypes = {
  review: PropTypes.object.isRequired,
  images: PropTypes.array,
};

ReviewWrapper.defaultTypes = {
  images: [],
};

export default ReviewWrapper;