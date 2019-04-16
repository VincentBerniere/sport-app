import { combineReducers } from 'redux';
import trainingsReducer from './trainingsReducer';

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