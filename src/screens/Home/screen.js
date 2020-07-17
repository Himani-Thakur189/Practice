import React, { Component, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './style.css'
import { CustomButton } from '../../components/atoms';

const Screen = ({ Notes, getNotes, addNotes }) => {
    let [title, setTitle] = React.useState('')
    const [error, setError] = React.useState('')

    let history = useHistory()

    const handleChange = (e) => {
        setTitle(e.target.value)
        setError('')
    }


    useEffect(() => {
        getNotes()
        console.log('Notes scree', Notes)
    }, [])

    const set = () => {
        title = title.trim()
        !!title ? addNotes({ title }) : setError('Cant add Empty Notes')
        setTitle('')
    }
    return (

        < div >
            <h1 style={{ marginLeft: '43%' }}>Add Notes</h1>
            <input
                className='input'
                type='text' style={{ fontSize: '20px' }}
                autoComplete='off'
                id='task'
                value={title}
                onChange={(e) => handleChange(e)}>
            </input>
            <CustomButton
                name='Add Notes'
                handleClick={set}
            />
            {error ? <p className='error'>{error}</p> : null}

            <CustomButton
                name='View notes'
                handleClick={() => history.push('/viewdata')}
            />

        </div >
    );
}

export default Screen;