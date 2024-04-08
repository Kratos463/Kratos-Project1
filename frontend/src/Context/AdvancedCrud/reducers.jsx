import * as actionTypes from './types';

export const initialState = {

    editModal: {
        isOpen: false,
    },
};

export function contextReducer(state, action) {
    const { keyState = null } = action;
    switch (action.type) {
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                editModal: { isOpen: true },
            };
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                editModal: { isOpen: false },
            };

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}