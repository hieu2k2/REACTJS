import App, { getSum } from "./App";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount } from "enzyme";
const assert = require("assert");
Enzyme.configure({ adapter: new Adapter() });
describe("App component", () => {
  it("should return the correct sum", () => {
    assert.equal(getSum(3, 5), 8);
  });
  it("should render required from element", () => {
    const wrapper = shallow(<App />);
    const firstInput = wrapper.find("#value-one-input");
    expect(firstInput.length).toBe(1);
    const secondInput = wrapper.find("#value-two-input");
    expect(secondInput.length).toBe(1);
    const addBtn = wrapper.find('button[type="button"]');
    expect(addBtn.length).toBe(1);
    const resultPara = wrapper.find(".result");
    expect(resultPara.length).toBe(1);
  });
  it("should display the result an add", () => {
    const wrapper = mount(<App />);
    const input = wrapper.find("input");
    const addBtn = wrapper.find('button[type="button"]');
    const resultPara = wrapper.find(".result");
    input.at(0).simulate("change", { target: { value: 3 } });
    input.at(1).simulate("change", { target: { value: 5 } });
    addBtn.simulate("click");
    expect(resultPara.text()).toEqual("8");
  });
});
