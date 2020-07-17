import axios from 'axios';
import { setData, add, Delete } from '../actions/tasks'

export const addNotes = (data) => {
    console.log('data')
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.status == 201 ? dispatch(add(data)) : null)
            .then(json => console.log('err', json))
    }
}
export const getNotes = () => {
    return dispatch => {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((data) => dispatch(setData(data.data)))
            .catch((err) => console.log('err', err))
    }
}

export const delNotes = (id) => {
    return dispatch => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'DELETE',
        })
            .then((response) => response.status == 200 ? dispatch(Delete(id)) : null)
            .catch((err) => console.log(err))
    }
}


