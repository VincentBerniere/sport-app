import _ from 'lodash';
import jsonTraining from '../api/training';
import * as constants from './constants';

// Action creator
export const selectTraining = training => {
    // Return an action
    return {
        type: constants.TRAINING_SELECTED,
        payload: training
    };
};

export const fetchTrainings = () => async dispatch => {
    // return dispatch => {
    //     return fetch('url')
    //         .then(response => response.json())
    //         .then(json => dispatch({ type: constants.FETCH_TRAININGS, payload: json }));
    // }

    const response = { data: [{ id: 0, title: 'Muscule', author: 'Mr. Chips' },
    { id: 1, title: 'Cardio', author: 'Besta' },
    { id: 2, title: 'Cours Co', author: 'Tic' },
    { id: 3, title: 'Chaussure training', author: 'Toc' }] };

    dispatch({ type: constants.FETCH_TRAININGS, payload: response.data });
};

export const createTraining = training => async dispatch => {
    // const response = await jsonTraining.post('/posts', training);
    const response = {};

    dispatch({ type: constants.FETCH_TRAININGS, payload: response.data });
};