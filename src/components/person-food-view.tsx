import * as React from 'react';

export type Person = {
    food: string,
    name: string,
    personId: string
}

interface Props {
    people: Array<Person>;
    removePerson: Function;
}

function buildListItem({food, name, personId}: { name: string, food: string, personId: string }, removePerson: Function) {
    return (
        <li key={personId}>
            <span className='person-name'>{name}</span>
            <span className='food-name'>{food}</span>
            <button
                className='remove-person'
                onClick={() => {
                    removePerson(personId);
                }}
                title='Remove'
            />
        </li>
    );
}

function buildList(people: Array<Person>, removePerson: Function) {
    return people.map(person => buildListItem(person, removePerson));
}

export const PersonFoodView: React.SFC<Props> = (props: Props) => {
    return (
        <>
            <div className='heading'>
                <label
                    className='name-label'
                >
                    Person
                </label>
                <label
                    className='food-label'
                >
                    Food
                </label>
            </div>
            <ul className='person-list'>
                {buildList(props.people, props.removePerson)}
            </ul>
        </>
    );
};
