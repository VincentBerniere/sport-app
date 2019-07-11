import React from 'react';
import { shallow } from 'enzyme'; 
import Modal from './Modal';

describe('Modal', () => {
    let modal = shallow(<Modal />);

    it('renders correctly', () => {
        expect(modal).toMatchSnapshot();
    });
});