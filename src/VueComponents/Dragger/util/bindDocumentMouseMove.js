export function bindDocumentMouseMove(callback) {
    document.addEventListener('mousemove', function (e) {
        callback(e)
    })
}