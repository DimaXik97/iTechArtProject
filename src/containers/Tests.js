import { connect } from 'react-redux'

import Tests from '../components/Tests/index.jsx';
const mapStateToProps = state => ({
    tests: state.tests
})
const mapDispatchToProps = dispatch => ({
  addTest: ()=>{
      dispatch({type: 'ADD_TEST'})
  },
  deleteTest: (id)=>{
    dispatch({type: 'DELETE_TEST',
      data: id})
  },
  changeTest:(id)=>
  {
    dispatch({type: 'CHANGE_TEST',
      data: id})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests)