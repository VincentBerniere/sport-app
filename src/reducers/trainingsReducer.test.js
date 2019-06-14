import trainingsReducer from './trainingsReducer';
import * as constants from './../actions/constants';

describe('trainingsReducer', () => {
    it('fetch trainings', () => {
        const trainings = [{ id: 0, title: 'Muscu' }];

        expect(trainingsReducer(undefined, { type: constants.FETCH_TRAININGS, payload: trainings }))
            .toEqual(trainings);
    });
});