import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../../widgets/TextArea';


it('renders correctly', () => {
  const props = {
    name: 'myInput',
  };
  const wrapper = shallow(<TextArea {...props} />);
  expect(wrapper.containsMatchingElement(
    <textarea
      className="form__input"
      id="myInput"
      name="myInput"
    />,
  )).toBe(true);
});
