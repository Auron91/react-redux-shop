const INITIAL_STATE = {
    view: 'grid layout'
}

const viewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_VIEW':
            return { ...state, view: action.payload }
        default:
            return state;
    }
}

export default viewReducer