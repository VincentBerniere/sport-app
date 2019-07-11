import * as constants from '../actions/constants';

const initialState = {
    modalType: null,
    modalProps: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case constants.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}