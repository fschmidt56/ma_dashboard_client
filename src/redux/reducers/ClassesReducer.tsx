  
import { IInitialClassesState, Actions } from "../types/state_types";
import { ActionTypes } from '../actions/ActionTypes';

//initialer State
const initialClassesState: IInitialClassesState = {
    classes: [0,100,200,300,400,500,600],
}

//reducer 
export const currentClassesState = (state: IInitialClassesState = initialClassesState, action: Actions): IInitialClassesState => {
    switch (action.type) {
        //set map
        case ActionTypes.SET_CLASSES:
            return Object.assign({}, state, {
                classes: action.payload
            });
        default:
            return state;
    }
};