import Home from './screen'
import { connect } from 'react-redux'
import { addNotes, delNotes, getNotes } from '../../redux/saga'

const mapStateToProps = state => {
    return {
        Notes: state.taskReducer.Notes,
        counter: state.taskReducer.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotes: (payload) => dispatch(addNotes(payload)),
        delNotes: (id) => dispatch(delNotes(id)),
        getNotes: () => dispatch(getNotes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)