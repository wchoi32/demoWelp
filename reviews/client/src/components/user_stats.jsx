import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/sidebar_style.css';

const UserStats = (props) => {
  const stats = [
    {
      label: 'friends',
      iconName: 'people',
    },
    {
      label: 'reviews',
      iconName: 'star',
    },
    {
      label: 'photos',
      iconName: 'camera_alt',
    },
  ];

  const statDivs = stats.map((stat) => {
    return (
      <div className={style.statContainer}>
        <i className={`material-icons ${style.sidebarIcons}`}>{stat.iconName}</i>
        <span className={style.figures} id={stat.label}><span className={style.bold}>{props.stats[stat.label]}</span>  {stat.label}</span>
      </div>
    );
  });

  return (<div>{statDivs}</div>);
};

UserStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default UserStats;
