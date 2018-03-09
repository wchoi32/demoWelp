const reviews1 = [
  {
    reviewId: 100,
    businessId: 200,
    user: {
      userId: 100,
      username: 'DukeIvy1',
      image: 'http://lorempixel.com/400/200/people',
      friends: 100,
      review: 100,
      photos: 100,
    },
    businessRating: 100,
    dateCreated: '2017-12-02T00:32:49.646Z',
    text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
    image: 'http://lorempixel.com/400/200/food',
    reviewRating: {
      useful: 100,
      funny: 100,
      cool: 100,
    },
  },
];

const reviews2 = [
  {
    reviewId: 300,
    businessId: 200,
    user: {
      userId: 300,
      username: 'DukeIvy1',
      image: 'http://lorempixel.com/400/200/people',
      friends: 300,
      review: 300,
      photos: 300,
    },
    businessRating: 300,
    dateCreated: '2017-12-02T00:32:49.646Z',
    text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
    image: 'http://lorempixel.com/400/200/food',
    reviewRating: {
      useful: 300,
      funny: 300,
      cool: 300,
    },
  },
];

const reviews3 = [
  {
    reviewId: 400,
    businessId: 200,
    user: {
      userId: 400,
      username: 'DukeIvy1',
      image: 'http://lorempixel.com/400/200/people',
      friends: 400,
      review: 400,
      photos: 400,
    },
    businessRating: 400,
    dateCreated: '2017-12-02T00:32:49.646Z',
    text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
    image: 'http://lorempixel.com/400/200/food',
    reviewRating: {
      useful: 400,
      funny: 400,
      cool: 400,
    },
  },
];

const reviews4 = [
  {
    reviewId: 500,
    businessId: 200,
    user: {
      userId: 500,
      username: 'DukeIvy1',
      image: 'http://lorempixel.com/400/200/people',
      friends: 500,
      review: 500,
      photos: 500,
    },
    businessRating: 500,
    dateCreated: '2017-12-02T00:32:49.646Z',
    text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
    image: 'http://lorempixel.com/400/200/food',
    reviewRating: {
      useful: 500,
      funny: 500,
      cool: 500,
    },
  },
];

const get = (url) => {
  if (url === '/biz/200/reviews?sortBy=newest&startAt=0') {
    return Promise.resolve({
      data: reviews1,
    });
  }
  if (url === '/biz/200/reviews?sortBy=newest&startAt=0&search=foobar') {
    return Promise.resolve({
      data: reviews2,
    });
  }
  if (url === '/biz/200/reviews/count') {
    return Promise.resolve({
      data: { count: 100 },
    });
  }
  if (url === '/biz/200/reviews/count?search=foobar') {
    return Promise.resolve({
      data: { count: 200 },
    });
  }
  if (url === '/biz/200/reviews?sortBy=newest&startAt=20') {
    return Promise.resolve({
      data: reviews3,
    });
  }
  if (url === '/biz/200/reviews?sortBy=oldest&startAt=0') {
    return Promise.resolve({
      data: reviews4,
    });
  }
};

module.exports.get = get;
