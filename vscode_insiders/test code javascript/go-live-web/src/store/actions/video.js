import { GET_VIDEO_BY_ID } from '@/store/constants/video';

const getVideoById = payload => {
  return {
    type: GET_VIDEO_BY_ID,
    payload,
  };
};

export { getVideoById };
