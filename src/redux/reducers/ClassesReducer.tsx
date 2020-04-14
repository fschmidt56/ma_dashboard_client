  
import { IInitialClassesState, Actions } from "../types/state_types";
import { ActionTypes } from '../actions/ActionTypes';

//initialer State
const initializeMap = async () => {
    fetch('http://192.168.2.185:8000/range')
        .then(data => data.json())
        .then(arr => { initialClassesState.classes = arr}) 
       }
initializeMap()       
const initialClassesState: IInitialClassesState = {
    classes: [0,100,200,300,400,500],
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