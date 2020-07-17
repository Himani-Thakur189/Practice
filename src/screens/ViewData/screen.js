import React, { Component } from 'react';
import './style.css'


class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: undefined,
            editValue: '',
            done: false,
            error: ''
        }
    }
    onEditNotes = (e, index) => {
        if (e.target.value.length == 0) {
            console.log('errr')
            this.setState({ error: 'Error' })
            this.props.editNotes({ index }, e.target.value)
        }
        else {
            this.props.editNotes({ index }, e.target.value)
            this.setState({ error: '' })
        }
    }

    onDone = () => {
        if (this.state.error) {
            return
        }
        this.setState({ edit: undefined })
    }
    toggle = (index) => {
        this.setState({ edit: index }, () => console.log('edit state', this.state.edit))
    }
    render() {
        return (
            <table>
                <caption style={{ fontSize: '30px', fontWeight: 700 }}>Notes</caption>
                <p style={{ color: 'red' }}>{this.state.error}</p>
                <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Task</th>
                    </tr>
                    {this.props.Notes ? this.props.Notes.map((data, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                                {this.state.edit == index ?
                                    <input
                                        type='text'
                                        value={data.title}
                                        onChange={(e) => this.onEditNotes(e, index)}>
                                    </input> :
                                    data.title
                                }
                                <button
                                    className='smallbtn'
                                    onClick={() => this.props.delNotes({ index })}>
                                    delete
                                </button>
                                {this.state.edit == index ?
                                    <button onClick={() => this.onDone()} className='smallbtn'>Done</button> :
                                    <button className='smallbtn' onClick={() => this.toggle(index)}>edit</button>
                                }
                            </td>
                        </tr>) : null}
                </tbody>
            </table>
        );
    }
}

export default ViewData;