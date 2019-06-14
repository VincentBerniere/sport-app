import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import TrainingList from './TrainingList';

describe('TrainingList', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore();

    const mockSelectTraining = jest.fn();
    const mockFetchTrainings = jest.fn();

    const props = {
        trainings: [{ id: 0 }, { id: 1 }]
    };

    let trainingList = shallow(<TrainingList {...props} />);

    it('renders correctly', () => {
        expect(trainingList).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.selectTraining = mockSelectTraining;
            props.fetchTrainings = mockFetchTrainings;
            trainingList = mount(<TrainingList {...props} store={store} />);
        });

        it('fetchTrainings has been called in beginning', () => {
            expect(mockFetchTrainings).toHaveBeenCalled();
        });

        it('create card foreach training in list', () => {
            expect(trainingList.find('.training-card').length).toEqual(2);
        });

        describe('and when clicking the `training-card` element', () => {
            beforeEach(() => {
                (trainingList.find('.training-card').at(0)).simulate('click');
            });

            it('contains a training detail component', () => {
                console.log(trainingList.debug());
                expect(trainingList.find('TrainingDetail').exists()).toBe(true);
            });
        });
    });
});