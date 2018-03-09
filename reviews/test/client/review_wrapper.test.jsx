import React from 'react';
import { shallow } from 'enzyme';
import ReviewWrapper from '../../client/src/components/review_wrapper';
import ReviewHeader from '../../client/src/components/review_header';
import Votes from '../../client/src/components/votes';

describe('test ReviewWrapper component', () => {
  const review = {
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
  };

  const reviewWrapperCompoent = shallow(<ReviewWrapper review={review} />);

  test('it should render the review text', () => {
    expect(reviewWrapperCompoent.find('[className="reviewText"]').prop('dangerouslySetInnerHTML').__html).toBe(review.text);
  });

  test('it should pass the business rating and the date created to ReviewHeader component', () => {
    expect(reviewWrapperCompoent.find(ReviewHeader).props().rating).toBe(review.businessRating);
    expect(reviewWrapperCompoent.find(ReviewHeader).props().date).toBe(review.dateCreated);
  });

  test('it should pass the review rating to Votes component', () => {
    expect(reviewWrapperCompoent.find(Votes).props().votes).toEqual(review.reviewRating);
  });
});
