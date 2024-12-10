import { all } from "redux-saga/effects";
import counterSaga from "./counter.saga";
import userSaga from "./user.saga";
import blogSaga from "./blog.saga";

function* RootSaga() {
    yield all([
        counterSaga(),
        userSaga(),
        blogSaga()
    ])
}
export default RootSaga;