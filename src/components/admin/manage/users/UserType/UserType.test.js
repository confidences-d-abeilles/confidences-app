import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



import UserType from './UserType'

describe('<UserType />', () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<UserType />);
	})

	it('should render a badge containing Particulier', () => {
		wrapper.setProps({ type : 1 });
		expect(wrapper.contains(<span className="badge badge-default">Particulier</span>)).toEqual(true);
	});
	
	it('should render a badge containing Entreprise', () => {
		wrapper.setProps({ type : 2 });
		expect(wrapper.contains(<span className="badge badge-default">Entreprise</span>)).toEqual(true);
	});

	it('should render a badge containing Apporteur d\'Affaires', () => {
		wrapper.setProps({ type : 3 });
		expect(wrapper.contains(<span className="badge badge-default">Apporteur d'Affaires</span>)).toEqual(true);
	});

	it('should render a badge containing Editeur', () => {
		wrapper.setProps({ type : 4 });
		expect(wrapper.contains(<span className="badge badge-default">Editeur</span>)).toEqual(true);
	});
	
	it('should render a badge containing Administrateur', () => {
		wrapper.setProps({ type : 5 });
		expect(wrapper.contains(<span className="badge badge-default">Administrateur</span>)).toEqual(true);
	});

	it('should render null', () => {
		expect(wrapper.get(0)).toBeNull();
	});
});