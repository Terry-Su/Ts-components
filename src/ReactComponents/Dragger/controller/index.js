import React from 'react'
import { render } from 'react-dom'

import App from '../component/App'

// style
import '../style/index.styl'



const Controller = {
    init() {
        render(
            <App />,
            document.getElementById('app')
        )
    }
}


module.exports = Controller