import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './Dashboard'
import './index.css'


/* class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
 */
ReactDOM.render(<Dashboard />, document.getElementById('root'))


/*
App
	Dashboard
		SearchBar
		Hamburgermenu
			FaveList
			ForgetFaveList
		FilterBar
			SortMenu
			FilterMenu
		ApplicantTable
			ApplicantRow
				FaveButton
			ApplicantDetails
*/