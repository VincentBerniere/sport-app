import React from 'react';
import { shallow, mount } from 'enzyme'; 
import TrainingEdit from './TrainingEdit';

describe('TrainingEdit', () => {
    let trainingEdit = shallow(<TrainingEdit />);

    it('renders correctly', () => {
        expect(trainingEdit).toMatchSnapshot();
    });

    describe('when typing into the editing form inputs', () => {
        const training = {
            title: 'Training 1',
            description: 'Sed ut perspiciatis unde omnis is ...'
        };

        beforeEach(() => {
            trainingEdit = mount(<TrainingEdit />);
            
            trainingEdit.find('#title').simulate('change', { target: { value: training.title } });
            trainingEdit.find('#description').simulate('change', { target: { value: training.description } });
        });

        it('update the title `state` correctly', () => {
            expect(trainingEdit.state().training.title).toMatchSnapshot(training.title);
        });

        it('update the description `state` correctly', () => {
            expect(trainingEdit.state().training.description).toMatchSnapshot(training.description);
        });
    });
});