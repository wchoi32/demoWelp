import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_wrapper_style.css';

const ReviewHeader = (props) => {
  const stars = Array(5);

  const starColor = props.rating < 5 ? 'orangeStar' : 'redStar';

  stars.fill(starColor, 0, props.rating);
  stars.fill('grayStar', props.rating);

  const divStars = stars.map((className) => {
    return (
      <div className={style[className]}>
        <i className={`material-icons ${style.star}`}>star</i>
      </div>
    );
  });

  const date = new Date(props.date);
  const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <div>
      {divStars}<span className={style.date}>{dateString}</span>
    </div>
  );
};

ReviewHeader.propTypes = {
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewHeader;
