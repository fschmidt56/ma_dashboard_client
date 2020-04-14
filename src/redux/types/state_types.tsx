import { ActionTypes } from "../actions/ActionTypes";
import Map from 'ol/Map';

//types of actions
export type Actions = Action_Fetching | Action_Map | Action_District | Action_Classes;

//redux state
export interface IInitialClassesState {
    classes: number[],
}
export interface IInitialDistrictState {
    district: string,
}
export interface IInitialMapState {
    map: Map | null,
}
export interface IInitialFetchingState {
    fetching: boolean,
}

//CONST ASSERTION
export const Action = {
    AMap: ActionTypes.SET_MAP,
    AFetching: ActionTypes.SET_FETCH,
    ADistict: ActionTypes.SET_DISTRICT,
    AClasses: ActionTypes.SET_CLASSES,
} as const

export interface Action_Classes {
    type: typeof Action.AClasses,
    payload: IInitialClassesState,
}

export interface Action_District {
    type: typeof Action.ADistict,
    payload: IInitialDistrictState,
}

export interface Action_Map {
    type: typeof Action.AMap,
    payload: IInitialMapState,
}

export interface Action_Fetching {
    type: typeof Action.AFetching,
    payload: IInitialFetchingState,
}

