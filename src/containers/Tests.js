import { connect } from 'react-redux'
import {sort} from '../helpers'
import {addTest, deleteTest, changeTest,getTests,changeOrder} from '../actions';

import Tests from '../components/Tests/index.jsx';

const mapStateToProps = state => ({
    tests: sort(state.tests.tests, {order: state.app.order, field: state.tests.field}),
    order: state.app.order,
    orderFields: state.categories.orderFields
})
const mapDispatchToProps = dispatch => ({
  init:(id)=>{
    dispatch(getTests(id))
  },
  addTest: ()=>{
    dispatch(addTest())
  },
  sort:(order)=>{
    dispatch(changeOrder(order));
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