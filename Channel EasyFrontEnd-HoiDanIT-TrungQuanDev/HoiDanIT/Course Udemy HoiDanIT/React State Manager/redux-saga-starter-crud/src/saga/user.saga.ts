import { call, takeEvery, put } from "redux-saga/effects";
import { fetchUserFailed, fetchUserPending, fetchUserSuccess } from "../redux/user/user.slide";
import { IUser } from "../types/backend";


const fetchUsers = async () => {
    return fetch("http://localhost:8000/users").then(res => res.json());
}

function* handleFetchUser() {
    try {
        const users: IUser[] = yield call(fetchUsers);
        yield put(fetchUserSuccess(users));
    } catch (error) {
        yield put(fetchUserFailed());
    }
}

function* userSaga() {
    yield takeEvery(fetchUserPending, handleFetchUser);
}
export default userSaga;