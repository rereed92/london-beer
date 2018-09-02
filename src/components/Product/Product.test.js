import React from 'react';
import { shallow, mount } from 'enzyme';
import Product from './Product';

let props = {
  item: {
    url: 'url',
    image_url: 'url',
    beer: 'beer',
    price: 2.50,
    average_review_rating_0_to_5: 4,
    quantity_in_stock: 2,
    brewery: 'brewery',
    size: '330ml'
  }
};

describe('<Product />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the content', () => {
    const wrapper = shallow(<Product {...props} />);
    expect(wrapper.find('.product')).toHaveLength(1);
  });

  it('should not render the content', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper.find('.product')).toHaveLength(0);
  });

  it('should show the low stock banner', () => {
    const wrapper = mount(<Product {...props} />);
    expect(wrapper.find('Banner').text()).toEqual('Low Stock');
  });

  it('should show the out of stock banner', () => {
    props = {
      item: {
        url: 'url',
        image_url: 'url',
        beer: 'beer',
        price: 2.50,
        average_review_rating_0_to_5: 4,
        quantity_in_stock: 0,
        brewery: 'brewery',
        size: '330ml'
      }
    };

    const wrapper = mount(<Product {...props} />);
    expect(wrapper.find('Banner').text()).toEqual('Out of Stock(Email me when back in!)');
  });
});