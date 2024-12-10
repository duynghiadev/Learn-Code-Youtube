import { call, put, takeEvery } from "redux-saga/effects";
import { createUserFailed, createUserPending, createUserSuccess, deleteUserFailed, deleteUserPending, deleteUserSuccess, fetchUserFailed, fetchUserPending, fetchUserSuccess, updateUserFailed, updateUserPending, updateUserSuccess } from "../redux/user/user.slide";
import { IUser } from "../types/backend";
import { PayloadAction } from "@reduxjs/toolkit"

const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    return res.json();
}

const createUser = async (email: string, name: string) => {
    const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            name: name
        }),
        headers: {
            "Content-Type": " application/json"
        }
    });

    return res.json()

}

const updateUser = async (id: number, email: string, name: string) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            email: email,
            name: name,
        }),
        headers: {
            "Content-Type": " application/json"
        }
    });
    return res.json()
}

const deleteUser = async (id: number) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": " application/json"
        }
    });
    return res.json()
}


function* handleFetchUser() {
    try {
        const users: IUser[] = yield call(fetchUsers);
        yield put(fetchUserSuccess(users));
    } catch (error) {
        yield put(fetchUserFailed())
    }
}

function* handleCreateUser(action: PayloadAction<{ email: string; name: string }>) {
    try {
        yield call(createUser, action.payload.email, action.payload.name);
        yield put(createUserSuccess());
        yield put(fetchUserPending())

    } catch (error) {
        yield put(createUserFailed())
    }
}

function* handleUpdateUser(action: PayloadAction<{ id: number; email: string; name: string }>) {
    try {
        yield call(updateUser, action.payload.id, action.payload.email, action.payload.name);
        yield put(updateUserSuccess());
        yield put(fetchUserPending())

    } catch (error) {
        yield put(updateUserFailed())
    }
}

function* handleDeleteUser(action: PayloadAction<{ id: number }>) {
    try {
        yield call(deleteUser, action.payload.id);
        yield put(deleteUserSuccess());
        yield put(fetchUserPending())

    } catch (error) {
        yield put(deleteUserFailed())
    }
}

function* userSaga() {
    yield takeEvery(fetchUserPending, handleFetchUser);
    yield takeEvery(createUserPending, handleCreateUser);
    yield takeEvery(updateUserPending, handleUpdateUser);
    yield takeEvery(deleteUserPending, handleDeleteUser);
}
export default userSaga;