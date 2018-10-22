import math from 'mathjs'
import {size,isNaN} from 'lodash'

function isNumeric (x) {
    return ((typeof x === 'number' || typeof x === 'string') && !isNaN(Number(x)));
}

const initialState = {
    display: []
}

export default function (state=initialState, action) {
    switch(action.type) {
        case 'ACTION_CLEAR_DISPLAY':
            return {...state, display:[]}
        case 'ACTION_CALCULATE_DISPLAY':
            let result = state.display.join('')
            result = math.eval(result)
            result = math.format(result, { precision: 14 })
            return {display: [result]}
        case 'ACTION_ADD_DISPLAY':
            if (size(state.display) === 0 && !isNumeric(action.payload)){
                return {...state, display:[]}
            } else {
                return {display: [...state.display, action.payload]}
            }
        default:
            return state
    }
};