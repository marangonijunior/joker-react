
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Search from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {
  it('Should renders the Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.search')).to.have.lengthOf(1);
  });
});