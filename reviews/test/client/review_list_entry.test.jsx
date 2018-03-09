import React from 'react';
import { shallow } from 'enzyme';
import ReviewListEntry from '../../client/src/components/review_list_entry';
import Sidebar from '../../client/src/components/sidebar';
import ReviewWrapper from '../../client/src/components/review_wrapper';


describe('test ReviewListEntry component', () => {
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
  };

  const reviewListEntryComponent = shallow(<ReviewListEntry review={review} />);
  const sidebarComponent = reviewListEntryComponent.find(Sidebar);
  const reviewWrapperComponent = reviewListEntryComponent.find(ReviewWrapper);

  test('it should render the sidebar component', () => {
    expect(reviewListEntryComponent.exists(Sidebar)).toBe(true);
  });

  test('it should pass the user info of review to the Sidebar component', () => {
    expect(sidebarComponent.props().user).toEqual(review.user);
  });

  test('it should render the ReviewWrapper component', () => {
    expect(reviewListEntryComponent.exists(ReviewWrapper)).toBe(true);
  });

  test('it should pass the review to the ReviewWrapper component', () => {
    expect(reviewWrapperComponent.props().review).toEqual(review);
  });

  test('it should change showOptions state to true during mouse enter and mouse leave event', () => {
    reviewListEntryComponent.find('li').simulate('mouseenter');
    reviewListEntryComponent.update();
    expect(reviewListEntryComponent.state('showOptions')).toBe(true);

    reviewListEntryComponent.find('li').simulate('mouseleave');
    reviewListEntryComponent.update();
    expect(reviewListEntryComponent.state('showOptions')).toBe(false);
  });
});
