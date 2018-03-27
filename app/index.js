import React, { PureComponent } from "react"
import ReactDOM from "react-dom"

import 'sanitize.css'
import 'less/index.less'

class App extends PureComponent {
  render () {
    console.log('%c🧞ok!', 'font-size: 120px;')
    return (
      <div className='fantastico'>
        <h1>🧞 FANTASTICO! is operating<br />with React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'))
