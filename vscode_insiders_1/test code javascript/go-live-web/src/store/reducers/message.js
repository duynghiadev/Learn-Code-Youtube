import update from 'immutability-helper';

import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  ADD_MESSAGE_SOCKET,
  SET_READ_MESSAGE_SOCKET,
  READ_MESSAGES,
  READ_MESSAGES_ERROR,
  READ_MESSAGES_SUCCESS,
} from '@/store/constants/message';
import { handleRequest, handleSuccess, handleError } from '@/utils/reducer';

const initialState = {
  info: {
    requesting: false,
    success: false,
    message: '',
    send_message: [],
  },

  info_messages: {
    requesting: false,
    success: false,
    message: '',
    messages: [],
  },
};

const handleSetReadMessageSocket = (state, payload) => {
  const { to } = payload.payload;
  const {
    info_messages: { messages },
  } = state;

  const messagesUpdated =
    messages.length > 0
      ? messages.map(message => {
          if (!message.readers?.includes(to)) {
            message.readers = message.readers.concat([to]);
          }

          return message;
        })
      : [];

  return update(state, {
    info_messages: {
      messages: {
        $set: messagesUpdated,
      },
    },
  });
};

// const handleReadMessages = (state, payload) => {
//   console.log('read message', payload);
//   const { from } = payload;
//   const {
//     info_messages: { messages },
//   } = state;

//   const messagesUpdated = messages.map(message => {
//     if (!message.readers.includes(from)) {
//       message.isRead = true;
//       message.readers = message.readers.concat([from]);
//     }

//     return message;
//   });

//   return update(state, {
//     info_messages: {
//       messages: {
//         $set: messagesUpdated,
//       },
//     },
//   });
// };

const messageReducer = (state = initialState, payload) => {
  const {
    info_messages: { messages },
  } = state;
  switch (payload.type) {
    case SEND_MESSAGE:
      return handleRequest(state, 'info', payload);
    case SEND_MESSAGE_SUCCESS: {
      const { addMessage } = payload;
      return handleSuccess(
        update(state, {
          info_messages: {
            messages: {
              $set: messages.concat({ fromSelf: true, message: addMessage }),
            },
          },
        }),
        'info',
        payload
      );
    }
    case SEND_MESSAGE_ERROR:
      return handleError(state, 'info', payload.message);

    case GET_MESSAGES:
      return handleRequest(state, 'info_messages', payload);
    case GET_MESSAGES_SUCCESS:
      return handleSuccess(state, 'info_messages', payload);
    case GET_MESSAGES_ERROR:
      return handleError(state, 'info_messages', payload.message);

    case ADD_MESSAGE_SOCKET: {
      const { message } = payload?.payload || '';
      return handleSuccess(
        update(state, {
          info_messages: {
            messages: { $set: messages.concat({ fromSelf: false, message }) },
          },
        }),
        'info',
        payload
      );
    }

    // case READ_MESSAGES:
    //   return handleRequest(state, 'info_messages', payload);
    // case READ_MESSAGES_SUCCESS:
    //   console.log('next', payload);
    //   return handleReadMessages(state, payload);
    // case READ_MESSAGES_ERROR:
    //   return handleError(state, 'info_messages', payload);

    case SET_READ_MESSAGE_SOCKET:
      return handleSetReadMessageSocket(state, payload);

    default:
      return state;
  }
};

export default messageReducer;
