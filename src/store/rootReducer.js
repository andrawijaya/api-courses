import {combineReducers} from "redux";

import courseReducer from "./reducers/courseReducer";
import courseTypeReducer from "./reducers/courseTypeReducer";

const rootReducer = combineReducers({
    courses: courseReducer,
    courseTypes: courseTypeReducer,
});

export default rootReducer;
