import React, { Component } from 'react'

import Element from './Element'

export default class RestrictContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isDragging: false,
            clientX: 0,
            clientY: 0,
        }
    }
    onMouseMove = (e) => {
        if (this.state.isDragging) {
            this.setState({
                clientX: e.clientX,
                clientY: e.clientY,
            })
        }
    }
    onMouseUp = (e) => {
        this.setState({
            isDragging: false,
        })
    }
    elementCallback = ({ 
        isDragging,
        clientX,
        clientY,
     }) => {

        console.log('isDragging', isDragging)
        this.setState({
            isDragging,
            clientX,
            clientY,
        })
    }
    render() {
        const {
            clientX,
            clientY,
        } = this.state

        return (
            <div
                className='RestrictContainer' style={{
                    position: 'relative',
                    width: 500,
                    height: 300,
                }}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
            >
                <Element clientX={clientX} clientY={clientY} elementCallback={this.elementCallback} />
            </div>
        )
    }
}