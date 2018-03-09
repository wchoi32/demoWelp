import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './dropdown';
import style from './styles/display_settings_style.css';

class DisplaySettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searching: false,
    };
  }

  handleChange(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  handleClick(purpose) {
    this.invokeClickSearch(purpose);
    this.setState({
      searchInput: '',
      searching: !this.state.searching,
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.invokeClickSearch('search');
      this.setState({
        searchInput: '',
        searching: !this.state.searching,
      });
    }
  }

  invokeClickSearch(purpose) {
    this.props.clickSearch(this.state.searchInput, purpose);
  }

  render() {
    const sortSelection = {
      selection: ['Newest First', 'Oldest First', 'Highest Rated', 'Lowest Rated'],
      label: 'Sort by',
    };

    const languageSort = {
      selection: ['English'],
      label: 'Language',
    };

    let closeSearchStyle;
    let searchBoxStyle;
    let searchButtonStyle;
    let searchTagStyle;
    let languageDropDownStyle;
    if (this.state.searching === false) {
      closeSearchStyle = style.hide;
      searchTagStyle = style.hide;
      searchBoxStyle = style.searchBox;
      searchButtonStyle = style.searchButton;
    } else {
      closeSearchStyle = style.closeSearch;
      searchTagStyle = style.searchTag;
      searchBoxStyle = style.hide;
      searchButtonStyle = style.hide;
      languageDropDownStyle = style.hide;
    }

    return (

      <div className={style.container}>
        <button className={closeSearchStyle} onClick={() => this.handleClick('close')}>Close Search</button>
        <div className={searchTagStyle}>{`${this.props.reviewCount} reviews mentioning "${this.props.searchText}"`}</div>
        <input className={searchBoxStyle} type="text" placeholder="Search within the reviews" value={this.state.searchInput} onChange={e => this.handleChange(e)} onKeyPress={e => this.handleKeyPress(e)}></input>
        <button className={searchButtonStyle} onClick={() => this.handleClick('search')} >
          <i className={`material-icons ${style.searchIcon}`}>search</i>
        </button>
        <Dropdown selection={sortSelection.selection} label={sortSelection.label} clickHandler={this.props.clickSort} />
        <span className={languageDropDownStyle}>
          <Dropdown selection={languageSort.selection} label={languageSort.label} reviewCount={` (${this.props.reviewCount})`} />
        </span>
        
      </div>

    );
  }
}

DisplaySettings.propTypes = {
  clickSort: PropTypes.func.isRequired,
  reviewCount: PropTypes.number.isRequired,
  clickSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default DisplaySettings;
