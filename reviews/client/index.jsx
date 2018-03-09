import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './src/components/reviews';
import url from '../url';

if (window.businessName === undefined) {
  const businessId = window.location.href.slice(window.location.href.search('biz') + 4).replace('/', '');
  axios.get(`${url}/biz/${businessId}?API=true`)
    .then(response => response.data.businessName)
    .then((businessName) => { ReactDOM.render(<Reviews businessId={Number(businessId)} businessName={businessName} />, document.getElementById('reviews')); });
} else {
  ReactDOM.render(<Reviews businessId={window.businessId} businessName={window.businessName} />, document.getElementById('reviews'));
}
