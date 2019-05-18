import React from 'react';
import { shallow } from 'enzyme';
import TextAreaWidget from '../../widgets/TextAreaWidget';


it('renders correctly', () => {
  const props = {
    name: 'myInput',
  };
  const wrapper = shallow(<TextAreaWidget {...props} />);
  expect(wrapper.containsMatchingElement(
    <textarea
      className="form__input"
      id="myInput"
      name="myInput"
    />,
  )).toBe(true);
});
