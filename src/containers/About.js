import { connect } from 'react-redux'

import About from '../components/About/index.jsx';

const mapStateToProps = state => ({
    vacancies: state.vacancies,
    news: state.news
})


export default connect(
  mapStateToProps
)(About)