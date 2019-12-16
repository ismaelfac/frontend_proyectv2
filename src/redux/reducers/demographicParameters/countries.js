import { handleActions } from "redux-actions";
import { getCountries as GET_COUNTRIES } from "../../actions/actions";

export default handleActions({
    [GET_COUNTRIES]: (action) => {
        return [
            {
                "id": 1,
                "description": 'Colombia'
            },
            {
                "id": 2,
                "description": 'Argentina'
            }
        ]
    }
}, [GET_COUNTRIES]);
