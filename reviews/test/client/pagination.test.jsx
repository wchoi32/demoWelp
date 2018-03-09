import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../../client/src/components/pagination';

describe('test Pagination component', () => {
  const reviewCount = 200;
  let currentPage = 2;
  const pages = Math.ceil(reviewCount / 20);
  let clickedPage;
  const clickPage = page => (clickedPage = page);

  const paginationComponent = shallow(<Pagination currentPage={currentPage} reviewCount={reviewCount} clickPage={clickPage} />);

  test('it should render to current page', () => {
    expect(paginationComponent.find('[className="text"]').text()).toBe(`Page ${currentPage} of ${pages}`);
  });

  test('clickPage should return the value of the clicked page', () => {
    paginationComponent.find('[className="page"]').at(1).simulate('click');
    expect(clickedPage).toBe(3);
  });

  test('should render previous when currentPage is greater than 1', () => {
    expect(paginationComponent.find('[className="previousPage"]').childAt(1).text()).toBe('Previous');
  });

  test('should render next when currentPage is less than pages', () => {
    expect(paginationComponent.find('[className="nextPage"]').childAt(0).text()).toBe('Next');
  });

  test('should return the current page plus 1 when next is clicked', () => {
    paginationComponent.find('[className="nextPage"]').simulate('click');
    expect(clickedPage).toBe(3);
  });

  test('should return the current page minus 1 when previous is clicked', () => {
    paginationComponent.find('[className="previousPage"]').simulate('click');
    expect(clickedPage).toBe(1);
  });

});
