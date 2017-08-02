import { connect } from 'react-redux'

import User from '../components/Profile/index.jsx';
const mapStateToProps = state => ({
    user: state.user
})


export default connect(
  mapStateToProps
)(User)