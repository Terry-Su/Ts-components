import React from 'react'
import { render } from 'react-dom'

import App from '../component/App'

import style from '../style/index.styl'



const Controller = {
    init() {
        console.log(style)
        render(
            <App />,
            document.getElementById('app')
        )
    }
}


module.exports = Controller