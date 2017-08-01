import { connect } from 'react-redux'

import Categories from '../components/Categories/index.jsx';
console.log("OK");
const mapStateToProps = state => ({
    categories: state
})
const mapDispatchToProps = dispatch => ({
  addCategory: ()=>{
      dispatch({type: 'ADD_CATEGORIES'})
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)