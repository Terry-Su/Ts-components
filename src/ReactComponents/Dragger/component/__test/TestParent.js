import React, { Component } from 'react'


export default class TestParent extends Component {
    render() {

        return (
            <div
                className='TestParent' style={{
                    position: 'relative',
                    background: 'grey',
                    width: 300,
                    height: 300,
                }}
            >
                {this.props.children}
            </div>
        )
    }
}