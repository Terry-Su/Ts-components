import React, { Component } from 'react'

import Element from './Element'

export default class RestrictContainer extends Component {
    render() {
        return (
            <div className='RestrictContainer' style={{
                width: 500,
                height: 300,
            }}>
                <Element />
            </div>
        )
    }
}