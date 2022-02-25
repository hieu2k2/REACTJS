import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {configure} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });
