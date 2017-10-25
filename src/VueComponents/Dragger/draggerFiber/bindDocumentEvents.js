import * as Util from '../util/index'


export function bindDocumentEvents() {
    const bindDocumentMouseMoveOnce = Util.createImplementOnceMethod(Util.bindDocumentMouseMove)
    const bindDocumentTouchMoveOnce = Util.createImplementOnceMethod(Util.bindDocumentTouchMove)
    const bindDocumentMouseUpOnce = Util.createImplementOnceMethod(Util.bindDocumentMouseUp)
    const bindDocumentTouchLeaveOnce = Util.createImplementOnceMethod(Util.bindDocumentTouchLeave)
    
    bindDocumentMouseMoveOnce(this.documentMouseMoveTouchMoveCallback)
    bindDocumentMouseUpOnce(this.documentMouseUpTouchLeaveCallback)
    bindDocumentTouchMoveOnce(this.documentMouseMoveTouchMoveCallback)
    bindDocumentTouchLeaveOnce(this.documentMouseUpTouchLeaveCallback)
}