import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';

const props = {
  products: [
    {
      url: 'url',
      image_url: 'url',
      beer: 'beer',
      price: 2.50,
      average_review_rating_0_to_5: 4,
      quantity_in_stock: 0,
      brewery: 'brewery',
      size: '330ml'
    },
    {
      url: 'url',
      image_url: 'url',
      beer: 'beer',
      price: 2.50,
      average_review_rating_0_to_5: 2,
      quantity_in_stock: 2,
      brewery: 'brewery',
      size: '330ml'
    }
  ]
}

describe('<Products />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Products {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});