import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {foodsById} from '../data/foods';

import {initializeStore} from './store';
import {Home} from './pages';

import '../styles/main.scss'

const store = initializeStore({
    foods: foodsById
});

const Root = (
    <Provider store={store}>
        <Home/>
    </Provider>
);

render(Root, document.getElementById('root'));
