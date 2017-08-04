import { connect } from 'react-redux'
import {addQuestion, deleteQuestion, changeQuestion} from '../actions';

import Questions from '../components/Questions/index.jsx';

const mapStateToProps = state => ({
    questions: state.questions,
    usersAnswers: state.answers
})
const mapDispatchToProps = dispatch => ({
    addQuestion: ()=>{
        dispatch(addQuestion())
    },
    changeQuestion: (id)=>{
        dispatch(changeQuestion(id))
    },
    deleteQuestion:(id)=>{
        dispatch(deleteQuestion(id))
    }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions)