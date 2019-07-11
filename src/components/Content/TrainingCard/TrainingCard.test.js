import React from 'react';
import { shallow } from 'enzyme'; 
import TrainingCard from './TrainingCard';

describe('TrainingCard', () => {
    const trainingCard = shallow(<TrainingCard />);

    it('renders correctly', () => {
        expect(trainingCard).toMatchSnapshot();
    });

    it('displays the training from props', () => {
        const training = { id: 0, name: 'Muscu', author: 'Jack' };
        const trainingCard = shallow(<TrainingCard training={training} />);
        
        expect(trainingCard.find('.header').text()).toEqual(training.name);
    });
});