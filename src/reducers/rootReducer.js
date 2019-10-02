const initalState = {
    counter: 0
}

const rootReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case 'INCREMENT':
            return { ...state, counter: payload }
        case 'DECREMENT':
            return { ...state, counter: 0 }
        default:
            return state
    }
}

export default rootReducer