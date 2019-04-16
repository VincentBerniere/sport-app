import _ from 'lodash';
import jsonTraining from '../api/training';

// Action creator
export const selectTraining = training => {
    // Return an action
    return {
        type: 'TRAINING_SELECTED',
        payload: training
    };
};

export const fetchTrainings = () => async dispatch => {
    // const response = await jsonTraining.get('/posts');
    const response = { data: [{ id: 0, title: 'Muscule', author: 'Mr. Chips' },
    { id: 1, title: 'Cardio', author: 'Besta' },
    { id: 2, title: 'Cours Co', author: 'Tic' },
    { id: 3, title: 'Chaussure training', author: 'Toc' }] };

    dispatch({ type: 'FETCH_TRAININGS', payload: response.data });
};