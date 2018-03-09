import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../../client/src/components/dropdown';

describe('test Dropdown component', () => {
  const label = 'foobar';
  const selection = ['foo', 'bar', 'hello', 'world'];
  const reviewCount = 200;

  let currentItem;
  const clickHandler = item => (currentItem = item);
  let dropdownComponent = shallow(<Dropdown label={label} selection={selection} clickHandler={clickHandler} reviewCount={reviewCount} />);

  test('it should toggle the menu when clicked', () => {
    dropdownComponent.find('[className="container"]').simulate('click');
    expect(dropdownComponent.state().showMenu).toBe(true);

    dropdownComponent.find('[className="container"]').simulate('click');
    expect(dropdownComponent.state().showMenu).toBe(false);
  });

  test('it should highlight the item where the cursor is hovered', () => {
    dropdownComponent.find('[className="container"]').simulate('click');
    dropdownComponent.find('[className="showMenu"]').childAt(0).simulate('mouseenter');
    expect(dropdownComponent.state().selected).toBe('foo');
  });

  test('it should invoke handleClick when item is clicked', () => {
    dropdownComponent.find('[className="showMenu"]').childAt(0).simulate('click');

    expect(dropdownComponent.state().selected).toBe('foo');
    expect(currentItem).toBe('foo');
  });

});