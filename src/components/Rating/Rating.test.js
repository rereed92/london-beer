import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

const props = {
  rating: 3
};

describe('<Rating />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.find('.rating')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find('.rating')).toHaveLength(0);
  });

  it('should render the icon 5 times', () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.find('.rating__icon')).toHaveLength(5);
  });

  it('should render the fill icon 3 times', () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.find('.rating__icon--fill')).toHaveLength(3);
  });
});