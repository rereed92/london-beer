import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const props = {
  text: 'Test'
};

describe('<Button />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('.button')).toHaveLength(1);
  });

  it('should not render the button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.button')).toHaveLength(0);
  });

  it('should render the slim class', () => {
    const wrapper = shallow(<Button {...props} slim />);
    expect(wrapper.find('.button--slim')).toHaveLength(1);
  });

  it('should not render the slim class', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('.button--slim')).toHaveLength(0);
  });

  it('should render disabled', () => {
    const wrapper = shallow(<Button {...props} disabled />);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('should not render disabled', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.prop('disabled')).toBeFalsy();
  });
});