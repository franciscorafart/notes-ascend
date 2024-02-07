const noteReducer = (state = [], action) => {
    if (action.type === 'NEW_NOTE') {
        return [...state, action.payload]
    }

    return state;
}

export default noteReducer;
