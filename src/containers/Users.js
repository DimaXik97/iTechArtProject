import { connect } from 'react-redux'
import {getUsers} from '../actions';

import Users from '../components/Users/index.jsx';
const mapDispatchToProps = dispatch => ({
    init:()=>{
        dispatch(getUsers())
    }
})

const mapStateToProps = state => ({
    users: state.users
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)