import { createStore, combineReducers } from "redux";
import Countries from "./reducers/demographicParameters/countries";
import Departaments from "./reducers/demographicParameters/departaments";
import Municipalities from "./reducers/demographicParameters/municipalities";
const reducer = combineReducers({
    Countries,
    Departaments,
    Municipalities
});

const store = createStore(reducer);

export default store;