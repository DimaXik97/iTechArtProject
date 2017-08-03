import { connect } from 'react-redux'
import {addСategory, deleteCategory, changeCategory} from '../actions';


import Categories from '../components/Categories/index.jsx';
const mapStateToProps = state => ({
    categories: state.categories
})
const mapDispatchToProps = dispatch => ({
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