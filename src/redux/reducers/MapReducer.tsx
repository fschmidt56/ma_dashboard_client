  
import { IInitialMapState, Actions } from "../types/state_types";
import { ActionTypes } from '../actions/ActionTypes';

//initialer State
const initialMapState: IInitialMapState = {
    map: null,
}

//reducer 
export const currentMapState = (state: IInitialMapState = initialMapState, action: Actions): IInitialMapState => {
    switch (action.type) {
        //set map
        case ActionTypes.SET_MAP:
            return Object.assign({}, state, {
                map: action.payload
            });
        default:
            return state;
    }
};