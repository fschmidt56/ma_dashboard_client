  
import { IInitialFetchingState, Actions } from "../types/state_types";
import { ActionTypes } from '../actions/ActionTypes';

//initialer State des Overlays
const initialFetchingState: IInitialFetchingState = {
    fetching: false,
}

//reducer für overlay-state
export const currentFetchState = (state: IInitialFetchingState = initialFetchingState, action: Actions): IInitialFetchingState => {
    switch (action.type) {
        //set fetch progress
        case ActionTypes.SET_FETCH:
            return Object.assign({}, state, {
                fetching: action.payload
            });
        default:
            return state;
    }
};