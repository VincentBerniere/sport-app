import React from 'react';
import { shallow } from 'enzyme'; 
import Authentification from './Authentification';

const authentification = shallow(<Authentification />);

describe('Authentification', () => {
    it('renders correctly', () => {
        expect(authentification).toMatchSnapshot();
    });
});
