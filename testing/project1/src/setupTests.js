import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });