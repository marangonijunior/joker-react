import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Joke from './index';

Enzyme.configure({ adapter: new Adapter() });


describe('<Joke />', () => {

    const render = customProps => {
      const props = {
          joker: {
            data: {
              value: {
                id: 1,
                joke: 'Test Joke',
              },
            },
          },
          ...customProps,
      };
      const component = shallow(<Joke {...props} />);
      return component;
  };

  it('Should renders the Joke component', () => {
    const component = render();
    expect(component.find('[data-test="joke-item"]').exists()).toEqual(true);
  });

  describe('Check if is valid items', () => {
    it('id is correct?', () => {
      const component = render();
      expect(component.find('[data-test="joke-item-id"]').text()).toEqual('Joke - 1');
    });
    it('joke is correct?', () => {
      const component = render();
      expect(component.find('[data-test="joke-item-joke"]').text()).toEqual('Test Joke');
    });
  });

});