import { connect } from 'react-redux'
import {getUser, getStatistics} from '../actions';

import User from '../components/Profile/index.jsx';
const mapDispatchToProps = dispatch => ({
    init:(id)=>{
        dispatch(getUser(id));
        dispatch(getStatistics(id))
    }
})

const mapStateToProps = state => ({
    user: state.user.user,
    statistics: state.user.statistics,
    questions: state.answers
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)