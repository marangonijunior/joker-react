import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Top from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Top />', () => {
  it('Should renders the Top component', () => {
    const component = shallow(<Top />);
    expect(component.find('[data-test="top"]').exists()).toEqual(true);
  });
});