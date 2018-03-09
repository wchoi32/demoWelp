const db = require('../../db/models/review.js');

const addUsersToReviews = (reviews, startAt = 0) => {
  let userPromise;
  const userPromises = [];
  const slicedReviews = reviews.slice(Number(startAt), Number(startAt) + 20);
  for (let i = 0; i < slicedReviews.length; i += 1) {
    userPromise = db.retrieveData('users', { userId: slicedReviews[i].user.userId })
      .then(user => user[0])
      .catch(() => 'user not found');
    userPromises.push(userPromise);
  }
  return Promise.all(userPromises)
    .then((users) => {
      const updatedReviews = slicedReviews;
      for (let i = 0; i < users.length; i += 1) {
        updatedReviews[i].user = users[i];
      }
      return updatedReviews;
    });
};

const getQueryForSort = (sortBy = 'newest') => {
  const queries = {
    newest: { dateCreated: -1 },
    oldest: { dateCreated: 1 },
    highestRated: { businessRating: -1 },
    lowestRated: { businessRating: 1 },
  };
  return queries[sortBy];
};

module.exports.addUsersToReviews = addUsersToReviews;
module.exports.getQueryForSort = getQueryForSort;
