import React, { Component } from 'react'
import { createImplementOnceMethod } from '../util/index'



const bindDocumentMouseMove = (callback) => {
    document.addEventListener('mousemove', function (e) {
        callback(e)
    })
}
const bindDocumentMouseMoveOnce = createImplementOnceMethod(bindDocumentMouseMove)

const bindDocumentMouseUp = (callback) => {
    document.addEventListener('mouseup', function (e) {
        callback(e)
    })
}

const bindDocumentMouseUpOnce = createImplementOnceMethod(bindDocumentMouseUp)

const documentMouseMoveCallback = (e) => {
    if (self.isMouseDown) {
        self.updateProp('clientX', e.x)
        self.updateProp('clientY', e.y)

        const possibleClientX = e.x
        const possibleClientY = e.y

        const {
            prevMouseMoveClientX,
            prevMouseMoveClientY,
            isMouseDown,
            element,
            offsetX,
            clientX,
            offsetY,
            clientY,
            parentElementLeft,
            parentElementTop,
        } = self
        const elementParentElement = element.parentElement
        const isMoved = possibleClientX !== prevMouseMoveClientX || possibleClientY !== prevMouseMoveClientY
        const isDragging = isMoved

        if (isDragging) {
            self.setState({
                x: clientX - parentElementLeft - offsetX,
                y: clientY - parentElementTop - offsetY,
            })

            self.updateProp('prevMouseMoveClientX', possibleClientX)
            self.updateProp('prevMouseMoveClientY', possibleClientY)
        }
    }
}

const documentMouseUpCallback = (e) => {
    self.isMouseDown && self.updateProp('isMouseDown', false)
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
        this.offsetX = 0
        // mouse's x position to document's left side
        this.clientX = 0
        // previous mouse's x position to document's left side
        this.prevMouseMoveClientX = null
        // mouse's y position to element's left side
        this.offsetY = 0
        // mouse's y position to document's left side
        this.clientY = 0
        // previous mouse's y position to document's left side
        this.prevMouseMoveClientY = null

        this.isMouseDown = false
        this.element = null
        this.elementParentElement = null

        this.elementLeft = null
        this.elementTop = null
        this.parentElementLeft = null
        this.parentElementTop = null
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

        bindDocumentMouseMoveOnce(documentMouseMoveCallback)
        bindDocumentMouseUpOnce(documentMouseUpCallback)

        this.updateProp('elementLeft', element.getBoundingClientRect().x)
        this.updateProp('elementTop', element.getBoundingClientRect().y)
        this.updateProp('parentElementLeft', elementParentElement.getBoundingClientRect().x)
        this.updateProp('parentElementTop', elementParentElement.getBoundingClientRect().y)
    }
    onDragStart = (e) => {
        const {
            prevMouseMoveClientX,
            prevMouseMoveClientY,
            elementLeft,
            elementTop,
            parentElementLeft,
            parentElementTop,
        } = self

        const clientX = e.nativeEvent.x !== undefined ? e.nativeEvent.x : e.nativeEvent.touches[0].clientX
        const clientY = e.nativeEvent.y !== undefined ? e.nativeEvent.y : e.nativeEvent.touches[0].clientY

        self.updateProp('offsetX', clientX - elementLeft )
        self.updateProp('offsetY', clientY - elementTop )
        self.updateProp('prevMouseMoveClientX', clientX)
        self.updateProp('prevMouseMoveClientY', clientY)
        self.updateProp('isMouseDown', true)

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
                    left: x === null ? 50 : x,
                    top: y === null ? 50 : y,
                }}
                ref={(element) => { this.element = element }}
                onMouseDown={this.onDragStart}
                onTouchStart={this.onDragStart}
            >

            </div>
        )
    }
}
