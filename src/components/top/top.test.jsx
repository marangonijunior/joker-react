import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Top from './index';

describe('<Top />', () => {
  it('Should renders the Top component', () => {
    const wrapper = shallow(<Top />);
    expect(wrapper.find('top')).to.have.lengthOf(1);
  });
});