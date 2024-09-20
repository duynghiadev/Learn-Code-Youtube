import {
  GET_VIDEO_BY_ID,
  GET_VIDEO_BY_ID_SUCCESS,
  GET_VIDEO_BY_ID_ERROR,
} from '@/store/constants/video';
import { handleRequest, handleSuccess, handleError } from '@/utils/reducer';

const initialState = {
  video: {
    requesting: false,
    success: false,
    message: '',
    data: [],
  },
};

const videoReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case GET_VIDEO_BY_ID:
      return handleRequest(state, 'video', payload);
    case GET_VIDEO_BY_ID_SUCCESS:
      return handleSuccess(state, 'video', payload);
    case GET_VIDEO_BY_ID_ERROR:
      return handleError(state, 'video', payload.message);

    default:
      return state;
  }
};

export default videoReducer;
