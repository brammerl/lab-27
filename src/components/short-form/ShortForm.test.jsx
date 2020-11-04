import React from 'react';
import { shallow } from 'enzyme';
import ShortForm from './ShortForm';

describe('ShortForm Component', () => {
  it('renders the short form component', () => {
    const wrapper = shallow(<ShortForm/>)
    expect(wrapper).toMatchSnapshot();
  })
})