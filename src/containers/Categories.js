import { connect } from 'react-redux'

import Categories from '../components/Categories/index.jsx';
const mapStateToProps = state => ({
    categories: state.categories
})
const mapDispatchToProps = dispatch => ({
  addСategory: ()=>{
      dispatch({type: 'ADD_CATEGORY'})
  },
  deleteCategory: (id)=>{
    dispatch({type: 'DELETE_CATEGORY',
      data: id})
  },
  changeCategory:(id)=>
  {
    dispatch({type: 'CHANGE_CATEGORY',
      data: id})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)