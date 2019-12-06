import { createStore, combineReducers } from "redux";
import Departaments from "./reducers/departaments";
import Municipalities from "./reducers/municipalities";
const reducer = combineReducers({
    Departaments,
    Municipalities
});

const store = createStore(reducer);

export default store;