import React, { Component } from 'react'

import * as DraggerFiber from 'DraggerFiber'

export default class Element extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: null,
            y: null,
        }

        // mouse's x position to element's left side
        this.offsetX = null
        // mouse's x position to document's left side
        this.clientX = null
        // previous mouse's x position to document's left side
        this.prevMouseMoveClientX = null
        // mouse's y position to element's top side
        this.offsetY = null
        // mouse's y position to document's top side
        this.clientY = null
        // previous mouse's y position to document's top side
        this.prevMouseMoveClientY = null

        this.isPressed = false
        this.element = null
        this.restrictElement = null
        this.elementParentElement = null

        Util.mapMethodsFromAToB(DraggerFiber, this, [
            'bindDocumentEvents',
            'documentMouseMoveTouchMoveCallback',
            'documentMouseUpTouchLeaveCallback',
            'getElementWidth',
            'getElementHeight',
            'getElementLeft',
            'getElementTop',
            'getParentElement',
            'getParentElementLeft',
            'getParentElementTop',
            'onDragStart',
            'updateProp',
        ])

    }
    componentDidMount() {
        const {
            element,
            getParentElement,
        } = this

        const elementParentElement = getParentElement()

        this.updateProp('elementLeft', element.getBoundingClientRect().x)
        this.updateProp('elementTop', element.getBoundingClientRect().y)
        this.updateProp('parentElementLeft', elementParentElement.getBoundingClientRect().x)
        this.updateProp('parentElementTop', elementParentElement.getBoundingClientRect().y)

        this.bindDocumentEvents()
    }

    componentWillUpdate() {

    }

    render() {
        const self = this

        const {
            x = 0,
            y = 0,
        } = this.state

        return (
            <div
                className="Element" style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                }}
                ref={el => { this.element = el }}
                onMouseDown={this.onDragStart}
                onTouchStart={this.onDragStart}
            >
                {this.props.children}
            </div>
        )
    }
}
