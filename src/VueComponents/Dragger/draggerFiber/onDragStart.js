export function onDragStart(e) {
    e.preventDefault()
    const {
        prevMouseMoveClientX,
        prevMouseMoveClientY,
        parentElementLeft,
        parentElementTop,
    } = this

    const clientX = e.x !== undefined ? e.x : e.nativeEvent.touches[0].clientX
    const clientY = e.y !== undefined ? e.y : e.nativeEvent.touches[0].clientY

    this.updateProp('offsetX', clientX - this.getElementLeft())
    this.updateProp('offsetY', clientY - this.getElementTop())
    this.updateProp('prevMouseMoveClientX', clientX)
    this.updateProp('prevMouseMoveClientY', clientY)
    this.updateProp('isPressed', true)
}