import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReviewList from './review_list';
import style from './styles/reviews_style.css';
import DisplaySettings from './display_settings';
import Pagination from './pagination';
import './styles/reset.css';
import url from '../../../url';

class Reviews extends React.Component {
  static extend(obj1, ...args) {
    const mainObj = obj1;
    args.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        mainObj[key] = obj[key];
      });
    });
    return mainObj;
  }

  static processReviewText(data, keyword) {
    const newData = data;
    newData.reviews.forEach((review) => {
      let { text } = review;
      if (keyword !== null) {
        const span = new RegExp(`(${keyword})`, 'gi');
        text = review.text.replace(span, `<b class="${style.searchText}">$1</b>`);
      }
      const newReview = review;
      newReview.text = text;
    });
    return newData;
  }

  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      reviewCount: 0,
      currentPage: 1,
      sortBy: 'newest',
      loading: true,
      searchText: null,
    };
  }
  componentWillMount() {
    this.updateReviewRender();
  }

  getReviewCount() {
    let searchQuery = '';

    if (this.state.searchText !== null) {
      searchQuery = `?search=${this.state.searchText}`;
    }

    return axios.get(`${url}/biz/${this.props.businessId}/reviews/count${searchQuery}`)
      .then(response => ({ reviewCount: response.data.count }));
  }

  retrieveData() {
    const sortBy = `sortBy=${this.state.sortBy}`;
    const startAt = `startAt=${(this.state.currentPage - 1) * 20}`;
    let searchQuery = '';

    if (this.state.searchText !== null) {
      searchQuery = `&search=${this.state.searchText}`;
    }

    return axios.get(`${url}/biz/${this.props.businessId}/reviews?${sortBy}&${startAt}${searchQuery}`)
      .then(response => ({ reviews: response.data }));
  }

  updateReviewRender(keyword = null) {
    const promises = [];
    promises.push(this.retrieveData());
    promises.push(this.getReviewCount());

    Promise.all(promises)
      .then((data) => {
        const combinedData = this.constructor.extend(
          data[0],
          data[1],
          { loading: false },
        );
        return this.constructor.processReviewText(combinedData, keyword);
      })
      .then(combinedData => this.setState(combinedData));
  }

  handleClickSort(sortQuery) {
    const sortQueries = {
      'Newest First': 'newest',
      'Oldest First': 'oldest',
      'Highest Rated': 'highestRated',
      'Lowest Rated': 'lowestRated',
    };

    this.setState({
      sortBy: sortQueries[sortQuery],
      loading: true,
      currentPage: 1,
    }, () => this.updateReviewRender(this.state.searchText));
  }

  handleClickPage(page) {
    if (page !== this.state.currentPage) {
      this.setState({
        currentPage: page,
        loading: true,
      }, () => {
        this.node.scrollIntoView();
        this.updateReviewRender(this.state.searchText);
      });
    }
  }

  handleSearch(keyword, purpose) {
    if (purpose === 'search') {
      this.setState({
        searchText: keyword,
        loading: true,
      }, () => this.updateReviewRender(keyword));
    } else {
      this.setState({
        searchText: null,
        loading: true,
      }, () => this.updateReviewRender(null));
    }
  }

  render() {
    if (this.state.reviews === null) {
      return null;
    }
    let feedStyle = style.feed;
    if (this.state.loading) {
      feedStyle += ` ${style.transparentFeed}`;
    }
    return (
      <div className={feedStyle} ref={(node) => { this.node = node; }}>
        <div className={style.titleContainer}>
          <span className={style.title}>Recommended Reviews for </span>
          <span className={style.businessName}>{this.props.businessName}</span>
        </div>
        <DisplaySettings searchText={this.state.searchText} clickSort={sortBy => this.handleClickSort(sortBy)} reviewCount={this.state.reviewCount} clickSearch={(keyword, purpose) => this.handleSearch(keyword, purpose)} />
        <ReviewList reviews={this.state.reviews} />
        <Pagination reviewCount={this.state.reviewCount} currentPage={this.state.currentPage} clickPage={page => this.handleClickPage(page)} />
      </div>
    );
  }
}

Reviews.propTypes = {
  businessName: PropTypes.string.isRequired,
  businessId: PropTypes.number.isRequired,
};

export default Reviews;
