import { combineReducers } from 'redux';
import trainingsReducer from './trainingsReducer';
import * as constants from '../actions/constants';

const selectedTrainingReducer = (selectedTraining = null, action) => {
    if (action.type === constants.TRAINING_SELECTED) {
        return action.payload;
    }

    return selectedTraining;
};

export default combineReducers({
    trainings: trainingsReducer,
    selectedTraining: selectedTrainingReducer
});