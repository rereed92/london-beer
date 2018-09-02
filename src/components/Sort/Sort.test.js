import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from 'enzyme';
import Sort from './Sort';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Sort />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Provider store={store}><Sort /></Provider>);
    expect(wrapper).toHaveLength(1);
  });
});