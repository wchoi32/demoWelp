import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_wrapper_style.css';

const Pictures = (props) => {
  const images = [];
  for (let i = 0; i < Math.min(3, props.images.length); i += 1) {
    const imageClassName = i === 0 ? style.firstImage : style.otherImage;
    images.push(<img className={imageClassName} src={props.images[i]}></img>);
  }

  return (<div>{images}</div>);
};

Pictures.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Pictures;
