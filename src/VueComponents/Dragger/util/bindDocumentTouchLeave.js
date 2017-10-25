export function bindDocumentTouchLeave(callback) {
    document.addEventListener('mouseup', function (e) {
        callback(e)
    })
}