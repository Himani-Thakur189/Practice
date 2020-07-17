import { ADD_NOTES, DEL_NOTES, EDIT_NOTES, SET_DATA } from '../actionTypes';

export const add = (content) => {
    return {
        type: ADD_NOTES,
        payload: {
            content
        }
    }
}


export const Delete = id => {
    return {
        type: DEL_NOTES,
        id
    }
}

export const editNotes = (content, data) => {
    return {
        type: EDIT_NOTES,
        payload: {
            content,
            data
        }
    }
}
export const setData = data => {
    return {
        type: SET_DATA,
        data
    }
}
