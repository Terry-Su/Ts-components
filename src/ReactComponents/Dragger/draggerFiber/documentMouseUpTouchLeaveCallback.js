export function documentMouseUpTouchLeaveCallback(e) {
    e.preventDefault()
    this.isPressed && this.updateProp('isPressed', false)
}