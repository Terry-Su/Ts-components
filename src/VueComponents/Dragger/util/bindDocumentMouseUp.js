export function bindDocumentMouseUp(callback) {
    document.addEventListener('mouseup', function (e) {
        callback(e)
    })
}