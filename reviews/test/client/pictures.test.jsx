import React from 'react';
import { shallow } from 'enzyme';
import Pictures from '../../client/src/components/pictures';

describe('test Pictures component', () => {
  const images = ['foo', 'bar', 'hello'];
  const picturesComponent = shallow(<Pictures images={images} />);

  test('it should render all images', () => {
    expect(picturesComponent.find(`[src="${images[0]}"]`).length).toEqual(1);
    expect(picturesComponent.find(`[src="${images[1]}"]`).length).toEqual(1);
    expect(picturesComponent.find(`[src="${images[2]}"]`).length).toEqual(1);
  });
});
