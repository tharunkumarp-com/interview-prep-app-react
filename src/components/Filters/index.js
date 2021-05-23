import {Component} from 'react'
import './index.css'

class Filters extends Component {
  clickingLevel = event => {
    const {changingLevel} = this.props
    const {value} = event.target
    return changingLevel(value)
  }

  clickingLanguage = event => {
    const {changingLanguage} = this.props
    const {value} = event.target
    return changingLanguage(value)
  }

  render() {
    const {levelsData, categoryData} = this.props
    return (
      <div className="filters-container">
        <div className="each">
          <label htmlFor="level-id" className="label">
            DIFFICULTY LEVEL
          </label>
          <select
            id="level-id"
            className="drop-down"
            onChange={event => this.clickingLevel(event)}
          >
            {levelsData.map(each => (
              <option key={each.id}>{each.level}</option>
            ))}
          </select>
        </div>
        <div className="each">
          <label htmlFor="language-id" className="label">
            LANGUAGE
          </label>
          <select
            className="drop-down"
            id="language-id"
            onChange={event => this.clickingLanguage(event)}
          >
            {categoryData.map(each => (
              <option key={each.id}>{each.language}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
