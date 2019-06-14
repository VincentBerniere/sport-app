import React from 'react';
import { shallow, mount } from 'enzyme'; 
import TrainingCreate from './TrainingCreate';

describe('TrainingCreate', () => {
    const mockCreateTraining = jest.fn();

    const props = {
        createTraining: mockCreateTraining
    };

    let trainingCreate = shallow(<TrainingCreate {...props} />);

    it('renders correctly', () => {
        expect(trainingCreate).toMatchSnapshot();
    });

    describe('when typing into the create form inputs', () => {
        const training = {
            title: 'Training 1',
            description: 'Sed ut perspiciatis unde omnis is ...'
        };

        beforeEach(() => {
            trainingCreate = mount(<TrainingCreate {...props} />);
            
            trainingCreate.find('#title').simulate('change', { target: { value: training.title } });
            trainingCreate.find('#description').simulate('change', { target: { value: training.description } });
        });

        it('update the title `state` correctly', () => {
            expect(trainingCreate.state().training.title).toMatchSnapshot(training.title);
        });

        it('update the description `state` correctly', () => {
            expect(trainingCreate.state().training.description).toMatchSnapshot(training.description);
        });

        it('submit form called function', () => {
            trainingCreate.find('.ui.primary.button').simulate('click');

            expect(mockCreateTraining).toHaveBeenCalled();
        });
    });
});