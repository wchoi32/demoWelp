import React from 'react';
import { shallow } from 'enzyme';
import SidebarOptions from '../../client/src/components/sidebar_options';

describe('test SidebarOptions component', () => {
  const username = 'foobar';
  const sidebarOptionsComponent = shallow(<SidebarOptions username={username}/>);

  test('it should render the user\'s username', () => {
    expect(sidebarOptionsComponent.find('[className="optionContainer"]').at(4).childAt(1).text()).toBe(`Follow ${username}`);
  });

});