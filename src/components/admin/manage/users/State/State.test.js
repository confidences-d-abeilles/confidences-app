import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



import State from './State'

describe('<State />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<State />);
	})

	it('should render a badge containing Non reglé', () => {
		wrapper.setProps({ level : 0 });
		expect(wrapper.contains(<span className="badge badge-danger">Non reglé</span>)).toEqual(true);
	});

	it('should render a badge containing En attente de validation', () => {
		wrapper.setProps({ level : 1 });
		expect(wrapper.contains(<span className="badge badge-warning">En attente de validation</span>)).toEqual(true);
	});

	it('should render a badge containing Payé', () => {
		wrapper.setProps({ level : 2 });
		expect(wrapper.contains(<span className="badge badge-success">Payé</span>)).toEqual(true);
	});

	it('should render a badge containing Payé et en place', () => {
		wrapper.setProps({ level : 3 });
		expect(wrapper.contains(<span className="badge badge-info">Payé et en place</span>)).toEqual(true);
	});

	it('should render a empty span', () => {
		expect(wrapper.contains(<span></span>)).toEqual(true);
	});
});