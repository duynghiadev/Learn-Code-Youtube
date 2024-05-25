import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '../../../../types/blog.type'
import http from '../../../../utils/http'

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkAPI) => {
  const response = await http.get<Post[]>('posts', {
    signal: thunkAPI.signal
  })
  return response.data
})

export const addPost = createAsyncThunk(
  'blog/addPost',
  async (body: Omit<Post, 'id'>, thunkAPI) => {
    const response = await http.post<Post>('posts', body, {
      signal: thunkAPI.signal
    })
    return response.data
  }
)

export const updatePost = createAsyncThunk(
  'blog/updatePost',
  async ({ postId, body }: { postId: string; body: Post }, thunkAPI) => {
    const response = await http.put<Post>(`posts/${postId}`, body, {
      signal: thunkAPI.signal
    })
    return response.data
  }
)
