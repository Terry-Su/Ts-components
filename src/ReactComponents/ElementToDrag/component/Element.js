import React, { Component } from 'react'
import { createImplementOnceMethod } from '../util/index'



const bindDocumentMouseMove = (callback) => {
    document.addEventListener('mousemove', function (e) {
        callback(e)
    })
}
const bindDocumentMouseMoveOnce = createImplementOnceMethod(bindDocumentMouseMove)

const bindDocumentTouchMove = (callback) => {
    document.addEventListener('touchmove', function (e) {
        callback(e)
    })
}
const bindDocumentTouchMoveOnce = createImplementOnceMethod(bindDocumentTouchMove)

const bindDocumentMouseUp = (callback) => {
    document.addEventListener('mouseup', function (e) {
        callback(e)
    })
}
const bindDocumentMouseUpOnce = createImplementOnceMethod(bindDocumentMouseUp)

const bindDocumentTouchLeave = (callback) => {
    document.addEventListener('touchleave', function (e) {
        callback(e)
    })
}
const bindDocumentTouchLeaveOnce = createImplementOnceMethod(bindDocumentTouchLeave)

const documentMouseMoveTouchMoveCallback = (e) => {
    e.preventDefault()

    if (self.isPressed) {
        const eventX = e.x !== undefined ? e.x : e.touches[0].clientX
        const eventY = e.y !== undefined ? e.y : e.touches[0].clientY

        self.updateProp('clientX', eventX)
        self.updateProp('clientY', eventY)

        const possibleClientX = eventX
        const possibleClientY = eventY

        const {
            prevMouseMoveClientX,
            prevMouseMoveClientY,
            isPressed,
            element,
            offsetX,
            clientX,
            offsetY,
            clientY,
        } = self
        const elementParentElement = element.parentElement
        const isMoved = possibleClientX !== prevMouseMoveClientX || possibleClientY !== prevMouseMoveClientY
        const isDragging = isMoved

        if (isDragging) {
            self.setState({
                x: clientX - self.getParentElementLeft() - offsetX,
                y: clientY - self.getParentElementTop() - offsetY,
            })

            self.updateProp('prevMouseMoveClientX', possibleClientX)
            self.updateProp('prevMouseMoveClientY', possibleClientY)
        }
    }
}

const documentMouseUpTouchLeaveCallback = (e) => {
    e.preventDefault()
    self.isPressed && self.updateProp('isPressed', false)
}

let self

export default class Element extends Component {
    constructor(props) {
        super(props)

        self = this

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
        // mouse's y position to element's left side
        this.offsetY = null
        // mouse's y position to document's left side
        this.clientY = null
        // previous mouse's y position to document's left side
        this.prevMouseMoveClientY = null

        this.isPressed = false
        this.element = null
    }

    getElementLeft() {
        return self.element.getBoundingClientRect().left
    }

    getElementTop() {
        return self.element.getBoundingClientRect().top      
    }

    getParentElement() {
        return self.element.parentElement
    }

    getParentElementLeft() {
        return self.getParentElement().getBoundingClientRect().left 
    }

    getParentElementTop() {
        return self.getParentElement().getBoundingClientRect().top
    }

    updateProp(prop, value) {
        this[prop] = value
    }
    componentDidMount() {
        const {
            element
        } = this

        this.updateProp('elementParentElement', element.parentElement)

        const { elementParentElement } = this

        bindDocumentMouseMoveOnce(documentMouseMoveTouchMoveCallback)
        bindDocumentMouseUpOnce(documentMouseUpTouchLeaveCallback)
        bindDocumentTouchMoveOnce(documentMouseMoveTouchMoveCallback)
        bindDocumentTouchLeaveOnce(documentMouseUpTouchLeaveCallback)

        this.updateProp('elementLeft', element.getBoundingClientRect().x)
        this.updateProp('elementTop', element.getBoundingClientRect().y)
        this.updateProp('parentElementLeft', elementParentElement.getBoundingClientRect().x)
        this.updateProp('parentElementTop', elementParentElement.getBoundingClientRect().y)
    }
    onDragStart = (e) => {
        e.preventDefault()
        const {
            prevMouseMoveClientX,
            prevMouseMoveClientY,
            parentElementLeft,
            parentElementTop,
        } = self

        const clientX = e.nativeEvent.x !== undefined ? e.nativeEvent.x : e.nativeEvent.touches[0].clientX
        const clientY = e.nativeEvent.y !== undefined ? e.nativeEvent.y : e.nativeEvent.touches[0].clientY

        self.updateProp('offsetX', clientX - self.getElementLeft())
        self.updateProp('offsetY', clientY - self.getElementTop())
        self.updateProp('prevMouseMoveClientX', clientX)
        self.updateProp('prevMouseMoveClientY', clientY)
        self.updateProp('isPressed', true)
    }
    render() {
        const {
            x,
            y,
        } = this.state

        return (
            <div
                className="Element" style={{
                    position: 'absolute',
                    background: 'orange',
                    width: 80,
                    height: 80,
                    left: x === null ? 0 : x,
                    top: y === null ? 0 : y,
                }}
                ref={(element) => { this.element = element }}
                onMouseDown={this.onDragStart}
                onTouchStart={this.onDragStart}
            >

            </div>
        )
    }
}
