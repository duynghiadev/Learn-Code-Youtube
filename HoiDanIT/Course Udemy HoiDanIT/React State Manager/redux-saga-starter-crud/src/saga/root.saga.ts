import { all } from "redux-saga/effects";
import counterSaga from "./counter.saga";
import userSaga from "./user.saga";

function* RootSaga() {
    console.log(">>> i'm root saga")
    yield all([
        counterSaga(),
        userSaga()
    ])
}
export default RootSaga;