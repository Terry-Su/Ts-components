import React, { Component } from 'react'

import Element from './Element'

export default class RestrictContainer extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         isDragging: false,
    //         clientX: 0,
    //     }
    // }
    // onMouseMove = (e) => {
    //     if (this.state.isDragging) {
    //         this.setState({
    //             clientX: e.nativeEvent.offsetX,
    //         })
    //     }
    // }
    // onMouseDown = (e) => {
    //     debugger
    //     if (this.state.isDragging) {
    //         // this.setState({
    //         //     clientX: e.nativeEvent.offsetX,
    //         // })
    //     }
    // }
    // onMouseUp = (e) => {
    //     this.setState({
    //         isDragging: false,
    //     })
    // }
    // elementCallback = ({
    //     isDragging,
    //  }) => {

    //     // console.log('isDragging', isDragging)
    //     this.setState({
    //         isDragging,
    //     })
    // }
    render() {

        return (
            <div
                className='RestrictContainer' style={{
                    position: 'relative',
                    background: 'grey',                    
                    width: 500,
                    height: 300,
                }}
            >
                <Element />
            </div>
        )
    }
}