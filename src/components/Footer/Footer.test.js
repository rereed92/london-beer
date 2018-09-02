import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });
});