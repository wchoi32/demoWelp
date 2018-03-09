import React from 'react';
import { shallow } from 'enzyme';
import UserStats from '../../client/src/components/user_stats';
import Sidebar from '../../client/src/components/sidebar';
import SidebarOptions from '../../client/src/components/sidebar_options';

describe('test sidebar component', () => {
  const user = {
    userId: 60,
    username: 'DukeIvy1',
    image: 'http://lorempixel.com/400/200/people',
    friends: 39,
    review: 33,
    photos: 37,
  };

  const sidebarComponent = shallow(<Sidebar user={user} />);

  test('it should render username and image', () => {
    expect(sidebarComponent.find('img').find(`[src="${user.image}"]`).length).toBe(1);
    expect(sidebarComponent.find('[className="username"]').text()).toBe(user.username);
  });

  test('it should pass user info to UserStats component', () => {
    expect(sidebarComponent.find(UserStats).props().stats).toEqual(user);
  });

  test('it should pass username to SidebarOptions component', () => {
    expect(sidebarComponent.find(SidebarOptions).props().username).toEqual(user.username);
  });
});