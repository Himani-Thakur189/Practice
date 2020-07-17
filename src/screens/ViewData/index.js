import ViewData from './screen'
import { connect } from 'react-redux'
import { delNotes } from '../../redux/saga'
import { editNotes } from '../../redux/actions/tasks'

const mapStateToProps = state => {
    return {
        Notes: state.taskReducer.Notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delNotes: (id) => dispatch(delNotes(id)),
        editNotes: (id, data) => dispatch(editNotes(id, data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewData)