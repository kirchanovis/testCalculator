import {combineReducers} from 'redux';
import CalcReducers from './calc'

const allReducers = combineReducers({
    calc: CalcReducers
});

export default allReducers;