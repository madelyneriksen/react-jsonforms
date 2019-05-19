import React from 'react';
import { shallow } from 'enzyme';

import Title from '../../components/Title';


it('renders without crashing', () => {
  const wrapper = shallow(<Title htmlFor="myInput" text="title text" />);
  expect(wrapper.containsMatchingElement(
    /* eslint-disable-next-line */
    <label htmlFor="myInput" className="form__label">title text</label>,
  ));
});
