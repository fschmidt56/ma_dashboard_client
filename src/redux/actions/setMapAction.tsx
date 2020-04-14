import { IInitialMapState, Action_Map } from "../types/state_types";
import { ActionTypes } from './ActionTypes';

export function setMap(payload: IInitialMapState): Action_Map {
    return { type: ActionTypes.SET_MAP, payload };
}