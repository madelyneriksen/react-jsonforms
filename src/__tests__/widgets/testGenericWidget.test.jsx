import React from 'react';
import { shallow } from 'enzyme';
import GenericInput from '../../widgets/GenericInput';


it('renders without crashing', () => {
  /* eslint-disable-next-line */
  const wrapper = shallow(<GenericInput name="myInput" />);
});
