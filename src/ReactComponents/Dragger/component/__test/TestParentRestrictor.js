import React, { Component } from 'react'


export default class TestParentRestrictor extends Component {
    render() {

        return (
            <div
                className='TestParentRestrictor'
                style={{
                    position: 'relative',
                    background: 'grey',
                    width: 300,
                    height: 300,
                }}
                ref={this.props.divRef}
            >
                {this.props.children}
            </div>
        )
    }
}