import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../../client/src/components/reviews';
import ReviewList from '../../client/src/components/review_list';
import DisplaySettings from '../../client/src/components/display_settings';
import Pagination from '../../client/src/components/pagination';

jest.mock('axios');

let reviewsComponent;
let displaySettingsComponent;

beforeEach(() => {
  reviewsComponent = shallow(<Reviews businessId={200} businessName="foobar" />);
});

describe('test Reviews component', async () => {
  beforeEach(() => {
    reviewsComponent.update();
  });

  test('should contain the DisplaySettings component', () => {
    expect(reviewsComponent.exists(<DisplaySettings />)).toBe(true);
  });
  
  test('should contain the ReviewList component', () => {
    expect(reviewsComponent.exists(<ReviewList />)).toBe(true);
  });

  test('should contain the Pagination component', () => {
    expect(reviewsComponent.exists(<Pagination />)).toBe(true);
  });

  test('should render the business name', () => {
    expect(reviewsComponent.find('[className="businessName"]').text()).toBe('foobar');
  });
});

describe('test handleSearch method when searching', () => {
  beforeEach(() => {
    reviewsComponent.instance().handleSearch('foobar', 'search');
  });

  test('it should query the server with the search keyword', () => {
    expect(reviewsComponent.state().searchText).toBe('foobar');
    expect(reviewsComponent.state().reviews[0].reviewId).toBe(300);
    expect(reviewsComponent.state().reviews[0].businessRating).toBe(300);
    expect(reviewsComponent.state().reviews[0].user.userId).toBe(300);
  });
});

describe('test handleSearch method when closing search', () => {
  beforeEach(() => {
    reviewsComponent.instance().handleSearch(null, 'close');
  });

  test('it should render all reviews when search result is closed', () => {  
    expect(reviewsComponent.state().reviews[0].reviewId).toBe(100);
    expect(reviewsComponent.state().reviews[0].businessRating).toBe(100);
    expect(reviewsComponent.state().reviews[0].user.userId).toBe(100);
  });
});

describe('test handleClickSort', () => {
  beforeEach(() => {
    reviewsComponent.instance().handleClickSort('Oldest First');
  });

  test('it should render all reviews when search result is closed', () => {
    expect(reviewsComponent.state().reviews[0].reviewId).toBe(500);
    expect(reviewsComponent.state().reviews[0].businessRating).toBe(500);
    expect(reviewsComponent.state().reviews[0].user.userId).toBe(500);
  });
});

describe('test handleClickPage', () => {
  beforeEach(() => {
    reviewsComponent.instance().handleClickPage(2);
  });

  test('it should render all reviews when search result is closed', () => {
    expect(reviewsComponent.state().reviews[0].reviewId).toBe(400);
    expect(reviewsComponent.state().reviews[0].businessRating).toBe(400);
    expect(reviewsComponent.state().reviews[0].user.userId).toBe(400);
  });
});



