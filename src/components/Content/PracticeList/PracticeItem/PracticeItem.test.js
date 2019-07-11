import React from 'react';
import { shallow } from 'enzyme'; 
import PracticeItem from './PracticeItem';

describe('PracticeItem', () => {
    const practiceItem = shallow(<PracticeItem />);

    it('renders correctly', () => {
        expect(practiceItem).toMatchSnapshot();
    });
});