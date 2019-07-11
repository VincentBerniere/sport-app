import React from 'react';
import { shallow, mount } from 'enzyme'; 
import TrainingCreate from './TrainingCreate';

describe('TrainingCreate', () => {
    let trainingCreate = shallow(<TrainingCreate />);

    it('renders correctly', () => {
        expect(trainingCreate).toMatchSnapshot();
    });

    describe('when typing into the create form inputs', () => {
        const training = {
            title: 'Training 1',
            description: 'Sed ut perspiciatis unde omnis is ...'
        };

        beforeEach(() => {
            trainingCreate = mount(<TrainingCreate />);
            
            trainingCreate.find('#title').simulate('change', { target: { value: training.title } });
            trainingCreate.find('#description').simulate('change', { target: { value: training.description } });
        });

        it('update the title `state` correctly', () => {
            expect(trainingCreate.state().training.title).toMatchSnapshot(training.title);
        });

        it('update the description `state` correctly', () => {
            expect(trainingCreate.state().training.description).toMatchSnapshot(training.description);
        });
    });
});