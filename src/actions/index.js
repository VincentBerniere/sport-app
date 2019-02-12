// Action creator
export const selectTraining = training => {
    // Return an action
    return {
        type: 'TRAINING_SELECTED',
        payload: training
    };
};