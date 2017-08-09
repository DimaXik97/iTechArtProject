import { connect } from 'react-redux'
import {sort} from '../helpers'
import {addTest, deleteTest, changeTest,getTests,changeOrder,changeOrderFieldTest} from '../actions';

import Tests from '../components/Tests/index.jsx';

const mapStateToProps = state => ({
    tests: sort(state.tests.tests, {order: state.app.order, field: state.tests.field}),
    order: state.app.order,
    orderFields: state.tests.orderFields,
    field: state.tests.field
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
  changeOrderField:(field)=>{
    dispatch(changeOrderFieldTest(field));
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