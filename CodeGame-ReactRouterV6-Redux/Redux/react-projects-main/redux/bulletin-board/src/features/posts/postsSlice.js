import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const postsAdapter = createEntityAdapter();

// Normalized state:-
const normalizedState = {
  posts: {
    ids: [1, 2, 3],
    entities: {
      1: {
        id: 1,
        title: "post-1",
        content: "content-1",
      },
    },
  },
};

// const initialState = {
//   posts: [],
//   status: "idle", // 'pending' | 'succeeded' | 'failed'
//   error: null,
// };
const initialState = postsAdapter.getInitialState({
  status: "idle", // 'pending' | 'succeeded' | 'failed'
  error: null,
});

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(POSTS_URL);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue("Oops!! something went wrong");
    }
  }
);

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (newPost, thunkApi) => {
    try {
      const { data } = await axios.post(POSTS_URL, newPost);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
      // return error.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post, thunkApi) => {
    try {
      const { data } = await axios.put(`${POSTS_URL}/${post.id}`, post);
      return data;
    } catch (error) {
      // return thunkApi.rejectWithValue(error.message);
      return post;
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, thunkApi) => {
    try {
      const response = await axios.delete(`${POSTS_URL}/${postId}`);
      return postId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            title,
            content,
            id: nanoid(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    updateReaction: {
      reducer: (state, { payload: { id, reactionUpdated } }) => {
        // const post = state.posts.find((p) => p.id === id);
        // after normalization
        const post = state.entities[id];
        post.reactions[reactionUpdated]++;
      },
      prepare: (postId, reactionUpdated) => {
        return { payload: { id: postId, reactionUpdated } };
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // need to chaneg structure of post to make it work for us
        const posts = action.payload.map((p) => ({
          ...p,
          content: p.body,
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        }));
        postsAdapter.upsertMany(state, posts);
        // state.posts = posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        action.payload.userId = Number(action.payload.userId);
        action.payload.content = action.payload.body;
        // state.posts.push(action.payload);
        postsAdapter.addOne(state, action.payload);
      })
      // cant add case for pending and rejected bcoz that would be the same state shared between post and addPostForm then twice loading might appear
      // .addCase(addNewPost.pending, (state, action) => {
      //   state.status = "pending";
      // })

      // .addCase(addNewPost.rejected, (state, action) => {
      //   state.status = "failed";
      // });
      .addCase(updatePost.fulfilled, (state, action) => {
        action.payload.content = action.payload.body;
        // const posts = state.posts.filter((p) => p.id !== action.payload.id);
        // state.posts = [action.payload, ...posts];
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.payload;
        // state.posts = state.posts.filter((p) => p.id !== postId);
        postsAdapter.removeOne(state, postId);
      });
  },
});

export const {} = postsAdapter.getSelectors();

// export const allPostsSelector = (state) => state.posts.posts;
export const postsStatusSelector = (state) => state.posts.status;
export const postsErrorSelector = (state) => state.posts.error;

// this is a selector which requires the id to be passed when selecting so its somewhat different from others

// 1-way
// export const postSelctorById = (id) => {
//   return (state) => state.posts.posts.find((p) => p.id === id);
// };

// or what is done in tutorial
// export const postSelctorById = (state, id) =>
//   state.posts.posts.find((p) => p.id === id);

export const {
  selectAll: allPostsSelector,
  selectIds: allPotsIdsSelector,
  selectById: postSelctorById,
} = postsAdapter.getSelectors((state) => state.posts);

export const postSelectorByuser = createSelector(
  [allPostsSelector, (state, userId) => userId],
  (posts, userId) => posts.filter((p) => p.userId === userId)
);

export const { addPost, updateReaction } = postsSlice.actions;

export default postsSlice.reducer;
