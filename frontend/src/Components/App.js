import React from 'react'
import Routes from './Routes'

import {connect} from 'react-redux'

function App() {
    return (
        <div>
            <Routes/>
        </div>
    )
}
  
export default connect(null)(App);
