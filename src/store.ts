import {createStore} from 'redux';
import reducer from './reducers';

export function initializeStore(initialState?: object) {
    return createStore(reducer, initialState!);
}
