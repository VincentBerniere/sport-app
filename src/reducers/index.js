import { combineReducers } from 'redux';

const trainingsReducer = () => {
    return [
        { id: 0, title: 'Muscule', author: 'Mr. Chips' },
        { id: 1, title: 'Cardio', author: 'Besta' },
        { id: 2, title: 'Cours Co', author: 'Tic' },
        { id: 3, title: 'Chaussure training', author: 'Toc' }
    ];
};

const selectedTrainingReducer = (selectedTraining = null, action) => {
    if (action.type === 'TRAINING_SELECTED') {
        return action.payload;
    }

    return selectedTraining;
};

export default combineReducers({
    trainings: trainingsReducer,
    selectedTraining: selectedTrainingReducer
});