import { IInitialClassesState, Action_Classes } from "../types/state_types";
import { ActionTypes } from './ActionTypes';

export function setClasses(payload: IInitialClassesState): Action_Classes {
    return { type: ActionTypes.SET_CLASSES, payload };
}