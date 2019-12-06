import { createStore, combineReducers } from "redux";
import Departaments from "./reducers/demographicParameters/departaments";
import Municipalities from "./reducers/demographicParameters/municipalities";
const reducer = combineReducers({
    Departaments,
    Municipalities
});

const store = createStore(reducer);

export default store;