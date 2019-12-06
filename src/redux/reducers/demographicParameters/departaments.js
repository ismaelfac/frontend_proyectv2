import { handleActions } from "redux-actions";
import { ACTION_1, ACTION_2 } from "../../actions/actions";

function DepartamentStore() {
    return ['REact','Ruby', 'Pyhton'];
}

export default handleActions({
    [ACTION_1]: DepartamentStore,
    [ACTION_2]: (state, action) => {
        return['PHP', 'LARAVEL', 'COMPOSER'];
    }
}, []);
