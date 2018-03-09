import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/sidebar_style.css';

const sidebarOptions = (props) => {
  const options = [
    {
      label: 'Share review',
      iconName: 'share',
    },
    {
      label: 'Embed review',
      iconName: 'code',
    },
    {
      label: 'Compliment',
      iconName: 'favorite',
    },
    {
      label: 'Send message',
      iconName: 'chat_bubble',
    },
    {
      label: `Follow ${props.username}`,
      iconName: 'person_add',
      noBorder: true,
    },
  ];

  const containerClassName = props.showOptions ? style.showContainer : style.hideContainer;

  const optionDivs = options.map((option) => {
    const border = option.noBorder ? style.noBorder : '';
    return (
      <div className={style.optionContainer}>
        <i className={`material-icons ${style.sidebarOptionIcon}`}>{option.iconName}</i>
        <div className={`${style.sidebarOptionLabel} ${border}`}>{option.label}</div>
      </div>
    );
  });

  return (<div className={containerClassName}>{optionDivs}</div>);
};

sidebarOptions.propTypes = {
  username: PropTypes.string.isRequired,
  showOptions: PropTypes.bool.isRequired,
};

export default sidebarOptions;
