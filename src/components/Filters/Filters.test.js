import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('<Filters />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper).toHaveLength(1);
  });

  it('should set the state to true', () => {
    const wrapper = shallow(<Filters />);
    global.window.innerWidth = 992;
    wrapper.instance().isDesktop();

    expect(wrapper.state().isDesktop).toBeTruthy();
  });

  it('should set the state to false', () => {
    const wrapper = shallow(<Filters />);
    global.window.innerWidth = 700;
    wrapper.instance().isDesktop();

    expect(wrapper.state().isDesktop).toBeFalsy();
  });
});