import {FoodPreferenceState} from "../reducers";

export function getNamesById(state: FoodPreferenceState) {
    return state.names;
}

export function getFoodsById(state: FoodPreferenceState) {
    return state.foods
}

export function getFoodsAsOptions(state: FoodPreferenceState) {
    return Object.entries(getFoodsById(state)).map((([foodId, food]) => {
        return {
            label: food,
            value: foodId
        }
    }));
}

export function getFoodChoices(state: FoodPreferenceState) {
    return state.choices;
}
