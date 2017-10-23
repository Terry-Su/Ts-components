import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                123
            </div>
        )
    }
}

const Controller = {
    init() {
        render(
            <App />,
            document.getElementById('app')
        )
    }
}


module.exports = Controller