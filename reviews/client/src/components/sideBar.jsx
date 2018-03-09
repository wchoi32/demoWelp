import React from 'react';
import PropTypes from 'prop-types';
import UserStats from './user_stats';
import SidebarOptions from './sidebar_options';
import style from './styles/sidebar_style.css';

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.passportContainer}>
        <img className={style.avatar} src={props.user.image} alt="hello"></img>
        <div className={style.userInfo}>
          <a className={style.username} href="/">{props.user.username}</a>
          <div className={style.userLocation}>{props.user.location}</div>
          <UserStats stats={props.user} />
        </div>
      </div>
      <SidebarOptions username={props.user.username} showOptions={props.showOptions} />
    </div>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Sidebar;
