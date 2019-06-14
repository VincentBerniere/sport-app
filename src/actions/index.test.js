import * as actions from './index';
import * as constants from './constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import jsonTraining from '../api/training';

const createMockStore = configureMockStore([thunk]);

it('create an action to select training', () => {
    const training = { id: 0, title: 'Muscu' };

    const expectedAction = { type: constants.TRAINING_SELECTED, payload: training };

    expect(actions.selectTraining(training)).toEqual(expectedAction);
});

it('create an async action to fetch trainings', () => {
    const mockResponse = [ { id: 0 }, { id: 1 } ];
    const store = createMockStore({ trainings: mockResponse })

    const expectedAction = { type: constants.FETCH_TRAININGS, payload: mockResponse };
    fetchMock.get('https://test.com', mockResponse);

    return store.dispatch(actions.fetchTrainings()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
    });
});