import React from 'react'
import {render} from 'react-dom'
import Calc from './containers/calc'
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux'
import './assets/css/calc.css'

const store = createStore(allReducers)

render(
    <Provider store={store}>
        <Calc />
    </Provider>, 
    document.getElementById('root')
)
