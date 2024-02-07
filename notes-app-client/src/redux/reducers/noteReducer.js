const noteReducer = (state = [], action) => {
    if (action.type === 'NEW_NOTE') {
        return [...state, action.payload]
    }

    if (action.type === 'TOGGLE_IMPORTANCE') {
        const newState = [...state]
        const i = newState.findIndex(e => e.id === action?.payload?.id);
        const elementToChange = {...newState[i]}
        const newElement = {...elementToChange, isFavorite: !elementToChange.isFavorite}

        newState[i] = newElement

        return newState
    }

    return state;
}

export default noteReducer;
