import _ from 'lodash';
import jsonTraining from '../api/training';
import * as constants from './constants';

export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
        type: constants.SHOW_MODAL,
        modalProps,
        modalType
    });
}

export const hideModal = () => dispatch => {
    dispatch({
        type: constants.HIDE_MODAL
    });
}