import React, { Component } from 'react'

export default class Element extends Component {
    constructor(props) {
        super(props)

        this.state = {
            elementClientX: 0,
            elementClientY: 0,
            pageX: 0,
            pageY: 0,
        }
    }
    onMouseDown = (e) => {
        this.setState({
            elementClientX: e.clientX,
            elementClientY: e.clientY,
            pageX: e.pageX,
            pageY: e.pageY,
        })

        this.props.elementCallback({
            isDragging: true,
            clientX: e.clientX,
            clientY: e.clientY,
        })
    }
    render() {
        const {
            elementClientX,
            elementClientY,
            pageX,
            pageY,
         } = this.state

        const {
            clientX,
            clientY,
            isDragging
         } = this.props

         let x = elementClientX
         let y = 0

         if (isDragging) {
            x = clientX - elementClientX + pageX
         }

         if (!isDragging) {
            x = clientX - elementClientX
         }
        return (
            <div
                className="Element" style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    left: x,
                    top: y,
                }}
                onMouseDown={this.onMouseDown}
            >

            </div>
        )
    }
}