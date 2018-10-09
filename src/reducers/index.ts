import {combineReducers} from 'redux';
import {ActionType} from 'typesafe-actions';

import * as actions from '../actions';
import {ADD, REMOVE} from '../constants';

export type FoodPreferenceAction = ActionType<typeof actions>;
export type Names = {
    [key: string]: string
}
export type Foods = {
    [key: string]: string
}
export type FoodChoices = {
    [key: string]: string
}
export type FoodPreferenceState = {
    readonly names: Names,
    readonly foods: Foods,
    readonly choices: FoodChoices
};

export default combineReducers<FoodPreferenceState, FoodPreferenceAction>({
    choices: (state: FoodChoices = {}, action: FoodPreferenceAction) => {
        switch (action.type) {
            case ADD:
                return {
                    ...state,
                    [action.payload.personId]: action.payload.foodId
                };

            case REMOVE:
                const newState = {...state};

                delete newState[action.payload];

                return newState;

            default:
                return state;
        }
    },
    foods: (state: Foods = {}) => {
        return state;
    },
    names: (state: Names = {}, action: FoodPreferenceAction) => {
        switch (action.type) {
            case ADD:
                return {
                    ...state,
                    [action.payload.personId]: action.payload.name
                };

            case REMOVE:
                const newState = {...state};

                delete newState[action.payload];

                return newState;

            default:
                return state;
        }
    }
});
