import {connect} from 'react-redux';
import {getFoodChoices, getFoodsById, getNamesById} from "../selectors";
import {FoodPreferenceState} from "../reducers";
import {remove} from "../actions";
import {Person, PersonFoodView} from "../components/person-food-view";

type StateProps = {
    people: Array<Person>
}

type DispatchProps = {
    removePerson: Function
}

function mapStateToProps(state: FoodPreferenceState) {
    const namesById = getNamesById(state);
    const foodChoices = getFoodChoices(state);
    const foodsById = getFoodsById(state);

    const people = Object.entries(foodChoices).map(([personId, foodId]) => ({
        food: foodsById[foodId],
        name: namesById[personId],
        personId
    }));

    return {
        people
    };
}

const mapDispatchToProps = {
    removePerson: remove
};

export const PersonFood = connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(PersonFoodView);
