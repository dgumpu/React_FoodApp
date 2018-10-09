import * as React from 'react';

export type Option = {
    label: string,
    value: string
}

interface Props {
    foods: Array<Option>
    onAdd: (name: string, foodId: string) => {};
}

interface State {
    name: string,
    foodId: string
}

function getPlaceholderOption() {
    return (
        <option
            disabled={true}
            key='-1'
            value=''
        >
            Choose a Food
        </option>
    );
}

function buildOptions(items: Array<Option>) {
    return [
        getPlaceholderOption(),
        ...items.map(({label, value}: Option) => (
            <option key={value} value={value}>{label}</option>
        ))
    ];
}

const defaultState = {
    name: '',
    foodId: ''
};

export class AddPersonView extends React.Component<Props> {
    readonly state: State = defaultState;

    isDisabled() {
        return !Boolean(this.state.name.replace(/\s*/g, '') && this.state.foodId);
    }

    render() {
        return (
            <>
                <input
                    className="person-name"
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        this.setState({
                            name: event.currentTarget.value
                        })
                    }}
                    placeholder='Enter Name'
                    type="text"
                    value={this.state.name}
                />
                <select
                    className="person-food"
                    onChange={(event: React.FormEvent<HTMLSelectElement>) => {
                        this.setState({
                            foodId: event.currentTarget.value
                        })
                    }}
                    value={this.state.foodId}
                >
                    {buildOptions(this.props.foods)}
                </select>
                <button
                    className='add-button'
                    disabled={this.isDisabled()}
                    onClick={() => {
                        this.props.onAdd(this.state.name, this.state.foodId);
                        this.setState(defaultState);
                    }}
                >
                    Add
                </button>
            </>
        );
    }
}
