import { render, screen } from "@testing-library/react";
import App from "./App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("test case for app ", () => {
  it("show render  the button ", () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find("#clickBtn");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Click me");
  });
});
