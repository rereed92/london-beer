import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

describe('<Banner />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Banner children={[{ child: 'Child' }]} />);
    expect(wrapper.find('.banner__content')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find('.banner__content')).toHaveLength(0);
  });
});