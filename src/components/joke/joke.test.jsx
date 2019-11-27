import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Joke from './index';

describe('<Joke />', () => {
  it('Should renders the Joke component', () => {
    const wrapper = shallow(<Joke />);
    expect(wrapper.find('Joke')).to.have.lengthOf(1);
  });
});