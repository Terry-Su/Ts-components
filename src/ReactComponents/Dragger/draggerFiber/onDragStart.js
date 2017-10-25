export function onDragStart(e) {
    e.preventDefault()
    const {
        prevMouseMoveClientX,
        prevMouseMoveClientY,
        parentElementLeft,
        parentElementTop,
    } = this

    const clientX = e.nativeEvent.x !== undefined ? e.nativeEvent.x : e.nativeEvent.touches[0].clientX
    const clientY = e.nativeEvent.y !== undefined ? e.nativeEvent.y : e.nativeEvent.touches[0].clientY

    this.updateProp('offsetX', clientX - this.getElementLeft())
    this.updateProp('offsetY', clientY - this.getElementTop())
    this.updateProp('prevMouseMoveClientX', clientX)
    this.updateProp('prevMouseMoveClientY', clientY)
    this.updateProp('isPressed', true)
}