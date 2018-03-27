import React, { PureComponent } from 'react'

import 'sanitize.css'
import 'less/index.less'

export default class App extends PureComponent {
  render () {
    return (
      <div className='fantastico'>
        <h1>🧞 FANTASTICO! is operating<br />with React!</h1>
      </div>
    )
  }
}
