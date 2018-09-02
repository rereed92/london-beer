import React from 'react';
import { shallow } from 'enzyme';
import Legend from './Legend';

describe('<Legend />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Legend />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Legend text="text" />);
    expect(wrapper.find('.legend')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Legend />);
    expect(wrapper.find('.legend')).toHaveLength(0);
  });

  it('should render the className', () => {
    const wrapper = shallow(<Legend text="text" className="class" />);
    expect(wrapper.find('.class')).toHaveLength(1);
  });
});