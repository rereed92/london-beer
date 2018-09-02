import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

const props = {
  options: [{ option: 'Option' }]
};

describe('<Select />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find('.select')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.find('.select')).toHaveLength(0);
  });

  it('should render the label', () => {
    const wrapper = shallow(<Select {...props} label="label" />);
    expect(wrapper.find('.select__label')).toHaveLength(1);
  });

  it('should not render the label', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find('.select__label')).toHaveLength(0);
  });
});