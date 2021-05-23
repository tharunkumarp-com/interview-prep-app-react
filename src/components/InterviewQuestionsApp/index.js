// Write you Code here
import {Component} from 'react'
import './index.css'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends Component {
  state = {level: 'ALL', language: 'ALL'}

  changingLevel = levelValue => {
    this.setState({level: levelValue})
  }

  changingLanguage = languageValue => {
    this.setState({language: languageValue})
  }

  getFilteredData = () => {
    const {questionsData} = this.props
    const {level, language} = this.state

    let filteredResults
    if (level === 'ALL' && language === 'ALL') {
      filteredResults = questionsData
    } else if (level !== 'ALL' && language === 'ALL') {
      filteredResults = questionsData.filter(
        each => each.difficultyLevel === level,
      )
    } else if (level === 'ALL' && language !== 'ALL') {
      filteredResults = questionsData.filter(each => each.language === language)
    } else {
      filteredResults = questionsData.filter(
        each => each.language === language && each.difficultyLevel === level,
      )
    }
    return filteredResults
  }

  render() {
    const {levelsData, categoryData} = this.props
    const filteredResults = this.getFilteredData()

    return (
      <div>
        <div className="bg-container">
          <h1 className="h1-bg">30 Seconds of Interviews</h1>
          <img
            className="bg-img"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="bg-img"
          />
        </div>
        <div className="container">
          <div>
            <Filters
              levelsData={levelsData}
              changingLevel={this.changingLevel}
              categoryData={categoryData}
              changingLanguage={this.changingLanguage}
            />
          </div>
          <div>
            {filteredResults.map(each => (
              <InterviewQuestion eachQuestion={each} key={each.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
