import { connect } from 'react-redux'

import Questions from '../components/Questions/index.jsx';
const mapStateToProps = state => ({
    questions: state.questions
})
const mapDispatchToProps = dispatch => ({
    addQuestion: ()=>{
        dispatch({type: 'ADD_QUESTION',
        data:1})
    },
    changeQuestion: (id)=>{
        dispatch({type: 'CHANGE_QUESTION',
        data: id})
    },
    deleteQuestion:(id)=>{
        dispatch({type: 'DELETE_QUESTION',
        data: id})
    }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions)