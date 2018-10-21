const ACTION_CLEAR_DISPLAY = 'ACTION_CLEAR_DISPLAY';
const ACTION_CALCULATE_DISPLAY = 'ACTION_CALCULATE_DISPLAY';
const ACTION_ADD_DISPLAY = 'ACTION_ADD_DISPLAY'

export const clearDisplay = () => {
    return {
        type: ACTION_CLEAR_DISPLAY,
        payload: null
    }
}

export const calculateDisplay = () => {
    return {
        type: ACTION_CALCULATE_DISPLAY,
        payload: null
    }
}

export const addDisplay = (num) => {
    return {
        type: ACTION_ADD_DISPLAY,
        payload: num
    }
}