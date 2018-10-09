import {connect} from 'react-redux';
import {getFoodsAsOptions} from "../selectors";
import {FoodPreferenceState} from "../reducers";
import {add} from "../actions";
import {AddPersonView, Option} from "../components/add-person";

type StateProps = {
    foods: Array<Option>
}

type DispatchProps = {
    onAdd: Function
}

function mapStateToProps(state: FoodPreferenceState) {
    return {
        foods: getFoodsAsOptions(state)
    };
}

const mapDispatchToProps = {
    onAdd: add
};

export const AddPerson = connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(AddPersonView);
