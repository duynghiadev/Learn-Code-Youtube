import {
  GET_ALL_BLOG,
  GET_ALL_BLOG_ERROR,
  GET_ALL_BLOG_SUCCESS,
} from '@/store/constants/blog';
import { handleRequest, handleSuccess, handleError } from '@/utils/reducer';

const initialState = {
  blogs: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },
};

const blogReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case GET_ALL_BLOG:
      return handleRequest(state, 'blogs', payload);
    case GET_ALL_BLOG_SUCCESS:
      return handleSuccess(state, 'blogs', payload);
    case GET_ALL_BLOG_ERROR:
      return handleError(state, 'blogs', payload.message);

    default:
      return state;
  }
};

export default blogReducer;
