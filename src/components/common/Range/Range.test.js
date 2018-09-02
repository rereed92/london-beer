import React from 'react';
import { shallow } from 'enzyme';
import Range from './Range';

describe('<Range />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Range />);
    expect(wrapper).toHaveLength(1);
  });
});