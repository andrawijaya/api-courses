import {createStore} from "redux";

import rootReducer from "./rootReducer";

const index = createStore(
    rootReducer
)

export default index;
