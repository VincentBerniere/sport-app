import React from 'react';
import { shallow } from 'enzyme'; 
import PracticeList from './PracticeList';

describe('PracticeList', () => {
    const practiceList = shallow(<PracticeList />);

    it('renders correctly', () => {
        expect(practiceList).toMatchSnapshot();
    });
});