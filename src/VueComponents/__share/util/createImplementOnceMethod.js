export function createImplementOnceMethod(fn) {
    let toBeTrue = false
    return function () {
        if (!toBeTrue) {
            toBeTrue = true
            return fn.apply(this, arguments)
        }
    }
}