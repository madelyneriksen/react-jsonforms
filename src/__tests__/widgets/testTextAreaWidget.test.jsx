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

it('calls onChange handler during change event', () => {
  const onChangeMock = jest.fn(event => event);
  const props = {
    name: 'myInput',
    onChange: onChangeMock,
  };
  const wrapper = shallow(<TextAreaWidget {...props} />);
  wrapper.simulate('change');
  expect(onChangeMock.mock.calls.length).toBe(1);

  wrapper.simulate('change');
  expect(onChangeMock.mock.calls.length).toBe(2);
});
