import { connect } from 'react-redux'
import {addTest, deleteTest, changeTest,getTests,sortTests} from '../actions';

import Tests from '../components/Tests/index.jsx';

const mapStateToProps = state => ({
    tests: sort(state.tests.tests, state.tests.flag),
    flag: state.tests.flag
})
const mapDispatchToProps = dispatch => ({
  init:(id)=>{
    dispatch(getTests(id))
  },
  addTest: ()=>{
    dispatch(addTest())
  },
  sort:(flag)=>{
    dispatch(sortTests(flag));
  },
  deleteTest: (id)=>{
    dispatch(deleteTest(id))
  },
  changeTest:(id)=>
  {
    dispatch(changeTest(id))
  }
})
let sort=(items,flag)=>{
  return items.sort(function (a, b) {
    if(flag){
      return new Date(b.date) - new Date(a.date);
    }
    else {
      return new Date(a.date) - new Date(b.date);
    }
  });
}  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests)