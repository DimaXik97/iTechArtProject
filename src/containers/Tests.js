import { connect } from 'react-redux'
import {addTest, deleteTest, changeTest,getTests} from '../actions';

import Tests from '../components/Tests/index.jsx';

const mapStateToProps = state => ({
    tests: state.tests
})
const mapDispatchToProps = dispatch => ({
  init:(id)=>{
    dispatch(getTests(id))
  },
  addTest: ()=>{
    dispatch(addTest())
  },
  deleteTest: (id)=>{
    dispatch(deleteTest(id))
  },
  changeTest:(id)=>
  {
    dispatch(changeTest(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests)