export function addFriend(name) {
    return {
        type: 'ADD_NOTE',
        name
    };
}

export function deleteFriend(id) {
    return {
        type: 'CHANGE_NOTE',
        id
    };
}