import React from "react";
import Result, { propsResult } from "./../src/components/Result";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Result />", () => {
  const render = (props: propsResult) => {
    const component = shallow(<Result {...props} />);
    return component;
  };

  it("Should renders the Result component", () => {
    let props: propsResult = {
      categories: [],
      id: 0,
      joke: "",
    };
    const component = render(props);
    expect(component.find('[data-test="joke-result"]').exists()).toEqual(true);
  });
});
