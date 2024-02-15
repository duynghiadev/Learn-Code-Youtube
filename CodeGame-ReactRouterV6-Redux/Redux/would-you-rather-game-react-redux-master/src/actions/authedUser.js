import { SET_AUTHED_USER }  from './types';

export const setAuthedUser = (id = null) => {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}