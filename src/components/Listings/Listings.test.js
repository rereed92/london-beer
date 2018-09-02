import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from 'enzyme';
import Listings from './Listings';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Listings />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Provider store={store}><Listings /></Provider>);
    expect(wrapper).toHaveLength(1);
  });
});