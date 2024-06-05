import update from 'immutability-helper';
import { toastMessage } from '@/utils/toast';

export const handleRequest = (state, action) =>
  update(state, {
    [action]: {
      requesting: { $set: true },
      success: { $set: false },
    },
  });

export const handleSuccess = (state, action, payload) => {
  if (payload.message) toastMessage('success', payload.message);
  return update(state, {
    [action]: {
      requesting: { $set: false },
      success: { $set: true },
      message: { $set: payload.message ?? '' },
      $merge: payload,
    },
  });
};

export const handleError = (state, action, error) => {
  const message = error !== 'Not authenticated' && error;

  if (error) toastMessage('error', message);
  return update(state, {
    [action]: {
      requesting: { $set: false },
      success: { $set: false },
      message: { $set: message ?? '' },
    },
  });
};
