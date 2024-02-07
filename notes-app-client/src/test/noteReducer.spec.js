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
    });

    it('returns new state with TOGGLE_IMPORTANCE action', () => {
        const state = [
            {
              body: 'the app state is in redux store',
              isFavorite: true,
              id: 1
            },
            {
              body: 'state changes are made with actions',
              isFavorite: false,
              id: 2
            }]
        
          const action = {
            type: 'TOGGLE_IMPORTANCE',
            payload: {
              id: 2
            }
          }
        
        deepFreeze(state);

        const newState = noteReducer(state, action);

        expect(newState).toHaveLength(2);
        expect(newState).toContainEqual({
            body: 'state changes are made with actions',
            isFavorite: true,
            id: 2,
        })
    })
})