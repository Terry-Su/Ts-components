import React, { Component } from 'react'


export default class TestChild extends Component {
    render() {
        return (
            <div
                className="TestChild"
                style={{
                    width: 100,
                    height: 80,
                    color: 'blue',
                    background: 'orange',
                }}
            >
                Box
            </div>
        )
    }
}