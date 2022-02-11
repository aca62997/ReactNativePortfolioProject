import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { bakeries } from './bakeries';

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchBakeries = () => dispatch => {

    dispatch(bakeriesLoading());

    return fetch(baseUrl + 'bakeries')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(bakeries => dispatch(addBakeries(bakeries)))
        .catch(error => dispatch(bakeriesFailed(error.message)));
};

export const bakeriesLoading = () => ({
    type: ActionTypes.BAKERIES_LOADING
});

export const bakeriesFailed = errMess => ({
    type: ActionTypes.BAKERIES_FAILED,
    payload: errMess
});

export const addBakeries = bakeries => ({
    type: ActionTypes.ADD_BAKERIES,
    payload: bakeries
});

export const postFavorite = bakeryId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(bakeryId));
    }, 2000);
};

export const addFavorite = bakeryId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: bakeryId
});