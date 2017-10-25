export function bindDocumentTouchMove(callback) {
    document.addEventListener('touchmove', function (e) {
        callback(e)
    })
}