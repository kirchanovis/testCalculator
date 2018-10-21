import math from 'mathjs'

const initialState = {
    display: []
}

export default function (state=initialState, action) {
    switch(action.type) {
        case 'ACTION_CLEAR_DISPLAY':
            return {...state, display:[]}
            break;
        case 'ACTION_CALCULATE_DISPLAY':
            let result = state.display.join('')
            result = math.eval(result)
            result = math.format(result, { precision: 14 })
            return {display: [result]}
            break
        case 'ACTION_ADD_DISPLAY':
            return {display: [...state.display, action.payload]}
            break
        default:
            return state
            break
    }
};