import { connect } from 'react-redux'
import {addСategory, deleteCategory, changeCategory,getCategories,initCategories,sortCategories} from '../actions';


import Categories from '../components/Categories/index.jsx';
const mapStateToProps = state => ({
    categories: sort(state.categories.categories, state.categories.flag),
    flag: state.categories.flag
})
const mapDispatchToProps = dispatch => ({
  init:()=>{
    dispatch(getCategories());
  },
  sort:(flag)=>{
    dispatch(sortCategories(flag));
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
)(Categories)