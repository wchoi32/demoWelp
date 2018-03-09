import React from 'react';
import { shallow } from 'enzyme';
import Votes from '../../client/src/components/votes';

describe('test Votes component', () => {
  const votes = {
    useful: 372,
    funny: 589,
    cool: 880,
  };

  const votesComponent = shallow(<Votes votes={votes}/>);

  test('it should render all votes', () => {
    expect(votesComponent.find('[className="voteButton"]').at(0).childAt(2).text()).toBe(votes.useful.toString());
    expect(votesComponent.find('[className="voteButton"]').at(1).childAt(2).text()).toBe(votes.funny.toString());
    expect(votesComponent.find('[className="voteButton"]').at(2).childAt(2).text()).toBe(votes.cool.toString());
  });
});