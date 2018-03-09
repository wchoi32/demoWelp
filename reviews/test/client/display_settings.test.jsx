import React from 'react';
import { shallow } from 'enzyme';
import DisplaySettings from '../../client/src/components/display_settings';
import Dropdown from '../../client/src/components/dropdown';


describe('test display settings component', () => {
  const clickSort = () => { const foo = 'bar'; };
  const reviewCount = 200;
  let searchWord;
  const clickSearch = word => (searchWord = word);

  const displaySettingsComponent = shallow(<DisplaySettings clickSort={clickSort} reviewCount={reviewCount} clickSearch={clickSearch} />);

  test('it should render the search box when "searching" state is equal to false', () => {
    expect(displaySettingsComponent.find('[className="searchBox"]').length).toBe(1);
    expect(displaySettingsComponent.find('[className="searchButton"]').length).toBe(1);
  });

  test('it should render the "close search" button when "searching" state is equal to true', () => {
    displaySettingsComponent.setState({ searching: true });
    expect(displaySettingsComponent.find('[className="closeSearch"]').length).toBe(1);
  });

  test('it should pass the correct props to sort dropdown', () => {
    expect(displaySettingsComponent.find(Dropdown).at(0).props().label).toBe('Sort by');
    expect(displaySettingsComponent.find(Dropdown).at(0).props().selection).toEqual(['Newest First', 'Oldest First', 'Highest Rated', 'Lowest Rated']);
  });

  test('it should pass the correct props to sort dropdown', () => {
    expect(displaySettingsComponent.find(Dropdown).at(1).props().label).toBe('Language');
    expect(displaySettingsComponent.find(Dropdown).at(1).props().selection).toEqual(['English']);
  });

  test('it should invoke the function clickSort and pass the search word when the search button is clicked', () => {
    displaySettingsComponent.setState({ searching: false, searchInput: 'hello world' });
    displaySettingsComponent.find('[className="searchButton"]').simulate('click');
    expect(searchWord).toBe('hello world');
  });

  test('it should invoke the function clickSort and pass the search word when the enter key is pressed while cursor is in search box', () => {
    searchWord = null;
    displaySettingsComponent.setState({ searching: false, searchInput: 'hello world' });
    displaySettingsComponent.find('[className="searchBox"]').simulate('keypress', { key: 'Enter' });
    expect(searchWord).toBe('hello world');
  });

  test('it should save the word inside the search box to searchInput state', () => {
    displaySettingsComponent.setState({ searching: false, searchInput: null });
    const searchBox = displaySettingsComponent.find('[className="searchBox"]');
    searchBox.simulate('change', { target: { value: 'foobar' } });
    expect(displaySettingsComponent.state().searchInput).toBe('foobar');
  });
});
