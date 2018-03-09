import React from 'react';
import { shallow } from 'enzyme';
import UserStats from '../../client/src/components/user_stats';

describe('test UserStats component', () => {
  const user = {
    userId: 60,
    username: 'DukeIvy1',
    location: 'San Leandro, CA',
    image: 'http://lorempixel.com/400/200/people',
    friends: 39,
    review: 33,
    photos: 37,
  };

  const userStatsComponent = shallow(<UserStats stats={user} />);

  test('it should render user stats', () => {
    expect(userStatsComponent.find('[id="friends"]').text()).toBe(`friends ${user.friends}`);
    expect(userStatsComponent.find('[id="reviews"]').text()).toBe(`reviews ${user.reviews}`);
    expect(userStatsComponent.find('[id="photos"]').text()).toBe(`photos ${user.photos}`);
  });
});

