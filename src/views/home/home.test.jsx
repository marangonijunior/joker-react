
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Home from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('Should renders the Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.home')).to.have.lengthOf(1);
  });
});