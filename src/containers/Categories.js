import { connect } from 'react-redux'
import {sort} from '../helpers'
import {addСategory, deleteCategory, changeCategory,getCategories,initCategories,changeOrder} from '../actions';


import Categories from '../components/Categories/index.jsx';
const mapStateToProps = state => ({
    categories: sort(state.categories.categories, {order: state.app.order, field: state.categories.field}),
    order: state.app.order,
    orderFields: state.categories.orderFields
})
const mapDispatchToProps = dispatch => ({
  init:()=>{
    dispatch(getCategories());
  },
  sort:(order)=>{
    dispatch(changeOrder(order));
  },
  addСategory: ()=>{
    dispatch(addСategory());
  },
  deleteCategory: (id)=>{
    dispatch(deleteCategory(id));
  },
  changeCategory: (id)=>{
    dispatch(changeCategory(id));
  },
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)