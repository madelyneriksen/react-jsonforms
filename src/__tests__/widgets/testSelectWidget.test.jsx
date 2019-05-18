import React from 'react';
import { shallow } from 'enzyme';
import SelectWidget from '../../widgets/SelectWidget';


it('renders as expected', () => {
  const props = {
    value: 'option1',
    name: 'myValue',
    options: [
      { value: 'option1', name: 'Option One' },
    ],
  };
  const wrapper = shallow((
    <SelectWidget
      value={props.value}
      name={props.name}
      options={props.options}
    />
  ));

  expect(wrapper.containsMatchingElement(
    <select
      value="option1"
      name="myValue"
      className="form__input"
      id="myValue"
    >
      <option
        value="option1"
      >
        Option One
      </option>
    </select>,
  )).toBe(true);
});

it('calls onChange handler when change is triggered', () => {
  const onChangeMock = jest.fn(event => event);
  const props = {
    value: 'option1',
    name: 'myValue',
    options: [
      { value: 'option1', name: 'Option One' },
    ],
  };
  const wrapper = shallow((
    <SelectWidget
      value={props.value}
      name={props.name}
      options={props.options}
      onChange={onChangeMock}
    />
  ));
  wrapper.simulate('change');
  expect(onChangeMock.mock.calls.length).toBe(1);

  wrapper.simulate('change');
  expect(onChangeMock.mock.calls.length).toBe(2);
});
