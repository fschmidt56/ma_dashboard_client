import { IInitialFetchingState, Action_Fetching } from "../types/state_types";
import { ActionTypes } from './ActionTypes';

export function setFetch(payload: IInitialFetchingState): Action_Fetching {
    return { type: ActionTypes.SET_FETCH, payload };
}