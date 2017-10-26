export default function (a, b) {
    const keysOfA = Object.keys(a)
    const updateBValueByKey = key => {
        b[key] = a[key]

        if (typeof b[key] === 'function') {
            b[key] = b[key].bind(b)
        }
    }

    
    keysOfA.map(updateBValueByKey)
}