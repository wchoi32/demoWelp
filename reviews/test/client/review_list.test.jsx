import React from 'react';
import { shallow } from 'enzyme';
import ReviewList from '../../client/src/components/review_list';
import ReviewListEntry from '../../client/src/components/review_list';

describe('test ReviewList component', () => {
  const reviews = Array(4).fill({
    reviewId: 300,
    businessId: 200,
    user: {
      userId: 60,
      username: 'DukeIvy1',
      image: 'http://lorempixel.com/400/200/people',
      friends: 39,
      review: 33,
      photos: 37,
    },
    businessRating: 5,
    dateCreated: '2017-12-02T00:32:49.646Z',
    text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
    image: 'http://lorempixel.com/400/200/food',
    reviewRating: {
      useful: 372,
      funny: 589,
      cool: 880,
    },
  });

  reviews.push({
    reviewId: 1000,
    businessId: 1000,
    user: {
      userId: 1000,
      username: 'DukeIvy1',
      image: 'http://lorempixel.com/400/200/people',
      friends: 1000,
      review: 1000,
      photos: 1000,
    },
    businessRating: 1000,
    dateCreated: '2017-12-02T00:32:49.646Z',
    text: 'Tenetur consectetur similique harum hic nesciunt velit repellendus commodi fuga. Omnis vero deserunt.',
    image: 'http://lorempixel.com/400/200/food',
    reviewRating: {
      useful: 1000,
      funny: 1000,
      cool: 1000,
    },
  });

  const reviewListComponent = shallow(<ReviewList reviews={reviews} />);
  const lastReviewListEntryComponent = reviewListComponent.find('ul').childAt(reviews.length - 1);

  test('number of reviewListEntry components should equal the number of reviews', () => {
    expect(reviewListComponent.find('ul').children().length).toBe(reviews.length);
  });

  test('should pass review data to ReviewListEntry components in order', () => {
    expect(lastReviewListEntryComponent.props().review).toEqual(reviews[reviews.length - 1]);
  });
});