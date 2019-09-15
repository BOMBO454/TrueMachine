import * as types from '../Constants/ActionTypes';

export function addFriend(name) {
    return {
        type: types.ADD_NOTE,
        name
    };
}

export function deleteFriend(id) {
    return {
        type: types.CHANGE_NOTE,
        id
    };
}