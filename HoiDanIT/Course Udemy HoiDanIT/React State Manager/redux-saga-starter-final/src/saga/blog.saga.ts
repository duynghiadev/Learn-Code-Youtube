import { call, put, takeEvery } from "redux-saga/effects";
import {
    createBlogFailed, createBlogPending, createBlogSuccess,
    deleteBlogFailed, deleteBlogPending, deleteBlogSuccess,
    fetchBlogFailed, fetchBlogPending, fetchBlogSuccess,
    updateBlogFailed, updateBlogPending, updateBlogSuccess
}
    from "../redux/blog/blog.slide";
import { IBlog } from "../types/backend";
import { PayloadAction } from "@reduxjs/toolkit"

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    return res.json();
}

const createBlog = async (title: string, author: string, content: string) => {
    const res = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            author: author,
            content: content
        }),
        headers: {
            "Content-Type": " application/json"
        }
    });

    return res.json()

}

const updateBlog = async (id: number, title: string, author: string, content: string) => {
    const res = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: title,
            author: author,
            content: content
        }),
        headers: {
            "Content-Type": " application/json"
        }
    });
    return res.json()
}

const deleteBlog = async (id: number) => {
    const res = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": " application/json"
        }
    });
    return res.json()
}


function* handleFetchBlog() {
    try {
        const blogs: IBlog[] = yield call(fetchBlogs);
        yield put(fetchBlogSuccess(blogs));
    } catch (error) {
        yield put(fetchBlogFailed())
    }
}

function* handleCreateBlog(action: PayloadAction<{ title: string; author: string; content: string }>) {
    try {
        yield call(createBlog, action.payload.title, action.payload.author, action.payload.content);
        yield put(createBlogSuccess());
        yield put(fetchBlogPending())

    } catch (error) {
        yield put(createBlogFailed())
    }
}

function* handleUpdateBlog(action: PayloadAction<{ id: number; title: string; author: string; content: string }>) {
    try {
        yield call(updateBlog, action.payload.id, action.payload.title, action.payload.author, action.payload.content);
        yield put(updateBlogSuccess());
        yield put(fetchBlogPending())

    } catch (error) {
        yield put(updateBlogFailed())
    }
}

function* handleDeleteBlog(action: PayloadAction<{ id: number }>) {
    try {
        yield call(deleteBlog, action.payload.id);
        yield put(deleteBlogSuccess());
        yield put(fetchBlogPending())

    } catch (error) {
        yield put(deleteBlogFailed())
    }
}

function* blogSaga() {
    yield takeEvery(fetchBlogPending, handleFetchBlog);
    yield takeEvery(createBlogPending, handleCreateBlog);
    yield takeEvery(updateBlogPending, handleUpdateBlog);
    yield takeEvery(deleteBlogPending, handleDeleteBlog);
}

export default blogSaga;