import noteReducer from "../redux/reducers/noteReducer";
import deepFreeze from "deep-freeze";

describe('noteReducer', () => {
    it('returns new state with NEW_NOTE action', () => {
        const state = [];
        const action = {
            type: 'NEW_NOTE',
            payload: {
                body: 'the app state',
                isFavorite: true,
                id: '123',
            },
        }

        deepFreeze(state);

        const newState = noteReducer(state, action);

        expect(newState).toHaveLength(1);
        expect(newState).toContainEqual(action.payload);
    })
})