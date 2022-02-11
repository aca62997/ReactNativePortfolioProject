import * as ActionTypes from './ActionTypes';

export const bakeries = (state = { isLoading: true,
                                     errMess: null,
                                     bakeries: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BAKERIES:
            return {...state, isLoading: false, errMess: null, bakeries: action.payload};

        case ActionTypes.BAKERIES_LOADING:
            return {...state, isLoading: true, errMess: null, bakeries: []}

        case ActionTypes.BAKERIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};