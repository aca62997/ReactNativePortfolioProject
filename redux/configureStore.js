import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bakeries } from './bakeries';
import { comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bakeries,
            comments,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}