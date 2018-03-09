import React from 'react';
import { shallow } from 'enzyme';
import ReviewHeader from '../../client/src/components/review_header';

describe('test ReviewHeader component', () => {
  const date = new Date();
  const rating = 4;
  const reviewHeaderComponent = shallow(<ReviewHeader date={date.toString()} rating={rating} />);
  const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  test('it should render the correct date created', () => {
    expect(reviewHeaderComponent.find('[className="date"]').text()).toBe(dateString);
  });

  test('it should have the number of orange stars same as the rating', () => {
    expect(reviewHeaderComponent.find('[className="orangeStar"]').length).toBe(4);
  });

  test('it should render all 5 stars as red when user gives a perfect rating', () => {
    reviewHeaderComponent.setProps({ rating: 5 });
    expect(reviewHeaderComponent.find('[className="redStar"]').length).toBe(5);
  });
});