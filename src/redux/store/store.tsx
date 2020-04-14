import { createStore, combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { currentMapState } from '../reducers/MapReducer';
import { currentFetchState } from '../reducers/FetchReducer';
import { currentDistrictState } from '../reducers/DistrictReducer';
import { currentClassesState } from '../reducers/ClassesReducer';


//if multiple reducers available combine reducers
const rootReducer = combineReducers({
    currentMapState,
    currentFetchState,
    currentDistrictState,
    currentClassesState,
});

//define rootState
export type RootState = StateType<typeof rootReducer>;

const store = createStore(
    rootReducer,
);

store.subscribe(() => console.log(store.getState()));

export default store;