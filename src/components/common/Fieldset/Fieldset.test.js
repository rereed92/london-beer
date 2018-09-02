import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from './Fieldset';

describe('<Fieldset />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Fieldset />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Fieldset children={[{ child: 'Child' }]} />);
    expect(wrapper.find('.fieldset')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Fieldset />);
    expect(wrapper.find('.fieldset')).toHaveLength(0);
  });

  it('should render the className', () => {
    const wrapper = shallow(<Fieldset children={[{ child: 'Child' }]} className="class" />);
    expect(wrapper.find('.class')).toHaveLength(1);
  });
});