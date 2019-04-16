export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TRAININGS':
            return action.payload;
        default:
            return state;
    }
};