import React from 'react';
import { shallow } from 'enzyme';
import DisplayUser from './DisplayUser';

describe('DisplayUser Component', () => {
  it('renders the display user component', () => {
    const wrapper = shallow(<DisplayUser userInfo={{}}/>)
    expect(wrapper).toMatchSnapshot();
  })
})