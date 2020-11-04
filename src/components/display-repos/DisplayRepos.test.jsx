import React from 'react';
import { shallow } from 'enzyme';
import DisplayRepos from './DisplayRepos';

describe('DisplayRepos Component', () => {
  it('renders the display repo component', () => {
    const wrapper = shallow(<DisplayRepos userRepos={[]}/>)
    expect(wrapper).toMatchSnapshot();
  })
})