import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the text', () => {
    const wrapper = shallow(<Checkbox text="Test" />);
    expect(wrapper.find('.checkbox__text')).toHaveLength(1);
  });

  it('should not render the text', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('.checkbox__text')).toHaveLength(0);
  });
});