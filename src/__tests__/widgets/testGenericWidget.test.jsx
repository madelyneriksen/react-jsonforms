import React from 'react';
import { shallow } from 'enzyme';
import GenericInput from '../../widgets/GenericInput';


it('renders without crashing', () => {
  /* eslint-disable-next-line */
  const wrapper = shallow(<GenericInput name="myInput" />);
});


it('passes name to id and name fields', () => {
  const wrapper = shallow(<GenericInput name="myInput" />);

  expect(wrapper.prop('id')).toBe('myInput');
  expect(wrapper.prop('name')).toBe('myInput');
});


it('passes attributes in attrs to raw html', () => {
  let attrs = { pattern: '[0-9]{3}' };
  let wrapper = shallow(<GenericInput name="myInput" attrs={attrs} />);

  expect(wrapper.prop('pattern')).toBe('[0-9]{3}');

  attrs = { 'data-target': 'some_val' };
  wrapper = shallow(<GenericInput name="myInput" attrs={attrs} />);

  expect(wrapper.prop('data-target')).toBe('some_val');
});


it('calls onchange handler when change is triggered', () => {
  const onChangeMock = jest.fn(event => event);
  const wrapper = shallow(<GenericInput name="myInput" onChange={onChangeMock} />);

  wrapper.simulate('change');
  expect(onChangeMock.mock.calls.length).toBe(1);

  wrapper.simulate('change');
  expect(onChangeMock.mock.calls.length).toBe(2);
});


it('accepts different input types', () => {
  let props = {
    type: 'number',
    name: 'myInput',
  };
  let wrapper = shallow(<GenericInput {...props} />);
  expect(wrapper.prop('type')).toBe('number');

  props = {
    type: 'tel',
    name: 'myInput',
  };
  wrapper = shallow(<GenericInput {...props} />);
  expect(wrapper.prop('type')).toBe('tel');
});
