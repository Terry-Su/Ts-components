import React, { Component } from 'react'

import RestrictContainer from './RestrictContainer'
import Element from './Element'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Element /> */}
                <RestrictContainer />
            </div>
        )
    }
}