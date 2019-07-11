import React from 'react';
import { shallow } from 'enzyme'; 
import PracticeItemEditable from './PracticeItemEditable';

describe('PracticeItemEditable', () => {
    const practiceItemEditable = shallow(<PracticeItemEditable />);

    it('renders correctly', () => {
        expect(practiceItemEditable).toMatchSnapshot();
    });
});