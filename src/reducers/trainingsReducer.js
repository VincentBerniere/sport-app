import * as constants from '../actions/constants';

export default (state = [], action) => {
    switch (action.type) {
        case constants.FETCH_TRAININGS:
            return action.payload;
        default:
            return state;
    }
};