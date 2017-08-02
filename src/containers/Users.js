import { connect } from 'react-redux'

import Users from '../components/Users/index.jsx';
const mapStateToProps = state => ({
    users: state.users
})


export default connect(
  mapStateToProps
)(Users)