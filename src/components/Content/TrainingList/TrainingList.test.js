import React from 'react';
import { shallow } from 'enzyme';
import TrainingList from './TrainingList';

describe('TrainingList', () => {
    let trainingList = shallow(<TrainingList />);
    trainingList.setState({ trainings: [{ id: 0 }, { id: 1 }] });

    it('renders correctly', () => {
        expect(trainingList).toMatchSnapshot();
    });

    it('create card foreach training in list', () => {
        expect(trainingList.find('.training-card').length).toEqual(2);
    });
});