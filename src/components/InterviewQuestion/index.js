// Write you Code here
import {Component} from 'react'
import './index.css'

class InterviewQuestion extends Component {
  state = {answer: false}

  showAnswer = () => {
    this.setState(previous => ({answer: !previous.answer}))
  }

  changeColorLanguage = () => {
    const {eachQuestion} = this.props
    const {language} = eachQuestion
    let colorName
    if (language === 'HTML') {
      colorName = 'HTML'
    } else if (language === 'CSS') {
      colorName = 'CSS'
    } else if (language === 'JAVASCRIPT') {
      colorName = 'JAVASCRIPT'
    }
    return colorName
  }

  changeLevelColor = () => {
    const {eachQuestion} = this.props
    const {difficultyLevel} = eachQuestion
    let levelColor
    if (difficultyLevel === 'EASY') {
      levelColor = 'EASY'
    } else if (difficultyLevel === 'MEDIUM') {
      levelColor = 'MEDIUM'
    } else if (difficultyLevel === 'HARD') {
      levelColor = 'HARD'
    }
    return levelColor
  }

  render() {
    const {answer} = this.state
    const {eachQuestion} = this.props
    const {questionText, answerText, language, difficultyLevel} = eachQuestion

    return (
      <div className="every-question">
        <div className="each-details">
          <span className={`${this.changeColorLanguage()} lang-para`}>
            {language}
          </span>
          <span className={`${this.changeLevelColor()} level-para`}>
            {difficultyLevel}
          </span>
        </div>
        <h1 className="question">{questionText}</h1>
        <button type="button" className="show-hide" onClick={this.showAnswer}>
          {answer ? <p className="para">Hide</p> : <p className="para">Show</p>}
          {answer ? (
            <img
              alt="up arrow"
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/up-arrow.png"
            />
          ) : (
            <img
              alt="down arrow"
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/down-arrow.png"
            />
          )}
        </button>
        {answer ? <p>{answerText}</p> : null}
      </div>
    )
  }
}

export default InterviewQuestion
