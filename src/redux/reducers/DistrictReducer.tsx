  
import { IInitialDistrictState, Actions } from "../types/state_types";
import { ActionTypes } from '../actions/ActionTypes';

//initialer State
const initialDistrictState: IInitialDistrictState = {
    district: '',
}

//reducer für state
export const currentDistrictState = (state: IInitialDistrictState = initialDistrictState, action: Actions): IInitialDistrictState => {
    switch (action.type) {
        //set district
        case ActionTypes.SET_DISTRICT:
            return Object.assign({}, state, {
                district: action.payload
            });
        default:
            return state;
    }
};