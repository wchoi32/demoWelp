import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/review_wrapper_style.css';

const Votes = (props) => {
  const votes = [
    {
      label: 'useful',
      iconName: 'far fa-lightbulb',
    },
    {
      label: 'funny',
      iconName: 'far fa-smile',
    },
    {
      label: 'cool',
      iconName: 'far fa-thumbs-up',
    },
  ];
  const voteDivs = votes.map((vote) => {
    return (
      <button className={style.voteButton}>
        <i className={vote.iconName}></i>
        <span className={style.buttonContents}>{vote.label.charAt(0).toUpperCase() + vote.label.slice(1)}</span>
        <span>{props.votes[vote.label]}</span>
      </button>
    );
  });

  return (
    <div>{voteDivs}</div>
  );
};

Votes.propTypes = {
  votes: PropTypes.object.isRequired,
};

export default Votes;
