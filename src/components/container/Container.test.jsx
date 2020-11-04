import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container Component', () => {
  it('renders the container', () => {
    const wrapper = shallow(<Container/>)
    expect(wrapper).toMatchSnapshot();
  })
})