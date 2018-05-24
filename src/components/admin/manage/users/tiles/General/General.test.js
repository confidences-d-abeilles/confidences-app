import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter : new Adapter() });

import General from './General'
import Loading from '../../../../../utils/Loading'
import UserType from '../../UserType/UserType'

describe('<General />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<General />);
	})

	it('should render only a Loading component', () => {
		expect(wrapper.contains(<Loading />)).toBe(true);
	})

	it('should render one UserType component', () => {
		wrapper.setProps({ data : true })
		expect(wrapper.find(UserType).length).toEqual(1);
	})
});