import React from 'react';
import { shallow } from 'enzyme';

import GenericWidget from '../../widgets/GenericWidget';
import Title from '../../components/Title';


it('renders correctly', () => {
  const onChangeMock = jest.fn(event => event);
  const props = {
    name: 'myInput',
    value: 'myValue',
    onChange: onChangeMock,
    title: {
      text: 'My Input',
    },
  };
  const wrapper = shallow(<GenericWidget {...props} />);
  expect(wrapper.containsMatchingElement(
    <input
      name="myInput"
      id="myInput"
      className="form__input"
    />,
  )).toBe(true);
  expect(wrapper.containsMatchingElement(
    <Title htmlFor="myInput" className="form__label" text="My Input" />,
  )).toBe(true);
});

it('does not render extra descriptions', () => {
  const onChangeMock = jest.fn(event => event);
  const props = {
    name: 'myInput',
    value: 'myValue',
    onChange: onChangeMock,
    title: {
      text: 'My Input',
    },
  };
  const wrapper = shallow(<GenericWidget {...props} />);
  expect(wrapper.exists('p')).toBe(false);
  expect(wrapper.exists('Description')).toBe(false);
  expect(wrapper.exists('.form__description')).toBe(false);
});
