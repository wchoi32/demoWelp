import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adStyle.css';

const AdItem = props => (
  <div>
    <div>
      <span className={style.ad}>Ad</span><span className={style.bizTitle}>{props.biz.businessName}</span>
      <img className={style.bizPic} src={props.biz.firstImage} alt={props.biz.firstImage} />
      <div>
        <img className={style.rating} src="http://images.nymag.com/news/intelligencer/intelposts120326_starstruck_560.jpg" alt="http://images.nymag.com/news/intelligencer/intelposts120326_starstruck_560.jpg"/><span className={style.rating}>{props.biz.quantityRatings} reviews</span>
      </div>
      <div>
        <span>{props.biz.fullReview}</span>
      </div>
      <div>
        <span className={style.metatag}>metatag, metatag, metagataga</span>
      </div>
    </div>
  </div>
);

AdItem.propTypes = {
  biz: PropTypes.object,
};

AdItem.defaultProps = {
  biz: {},
};

export default AdItem;
