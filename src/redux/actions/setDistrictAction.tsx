import { IInitialDistrictState, Action_District } from "../types/state_types";
import { ActionTypes } from './ActionTypes';

export function setDistrict(payload: IInitialDistrictState): Action_District {
    return { type: ActionTypes.SET_DISTRICT, payload };
}