import * as React from 'react';
import {AddPerson} from "../connected/add-person";
import {PersonFood} from "../connected/person-food-view";

export const Home = () => {
    return (
        <section className='people-food-app'>
            <h1>Food Choice App</h1>
            <AddPerson/>
            <PersonFood/>
        </section>
    );
};
