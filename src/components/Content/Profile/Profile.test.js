import React from 'react';
import { shallow } from 'enzyme'; 
import Profile from './Profile';

describe('Profile', () => {
    let profile = shallow(<Profile />);

    it('renders correctly', () => {
        expect(profile).toMatchSnapshot();
    });
});