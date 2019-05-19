import React from 'react';
import { shallow } from 'enzyme';

import Description from '../../components/Description';

it('renders without crashing', () => {
  const wrapper = shallow(<Description text="desc text" />);
  expect(wrapper.containsMatchingElement(
    <p className="form__description">desc text</p>,
  )).toBe(true);
});
