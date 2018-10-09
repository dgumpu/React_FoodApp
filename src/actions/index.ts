import {action, createAction} from 'typesafe-actions';
import {ADD, REMOVE} from '../constants';
import {v4} from 'uuid';

export const add = createAction(ADD, resolve => {
    return (name: string, foodId: string) => {
        const personId: string = v4();

        return resolve({foodId, name, personId});
    };
});

export const remove = (personId: string) => action(REMOVE, personId);
