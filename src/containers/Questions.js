import { connect } from 'react-redux'
import {addQuestion, deleteQuestion, changeQuestion} from '../actions';

console.log(addQuestion);

import Questions from '../components/Questions/index.jsx';

const mapStateToProps = state => ({
    questions: state.questions,
    usersAnswers: []
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