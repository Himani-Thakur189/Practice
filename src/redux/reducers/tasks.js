import { ADD_NOTES, DEL_NOTES, EDIT_NOTES, GET_NOTES, SET_DATA } from '../actionTypes'
const initialState = {
    Notes: [],
    counter: 6
}
const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA:
            return {
                ...state, Notes: action.data
            }
        case ADD_NOTES:
            if (!state.Notes)
                state.Notes = []
            let arr = [...state.Notes]
            arr.push(action.payload.content)
            return {
                ...state, Notes: [...arr]
            }
        case DEL_NOTES:
            return {
                ...state, Notes: state.Notes.filter((id, index) => index != action.id.index)
            }
        case EDIT_NOTES:
            let id = action.payload.content.index
            let value = action.payload.data
            return {
                ...state, Notes: state.Notes.map((data, index) => index == id ? state.Notes[id].title = { title: value } : data)
            }
        case GET_NOTES:
            return {
                ...state
            }
        default: return state
    }
}
export default taskReducer
