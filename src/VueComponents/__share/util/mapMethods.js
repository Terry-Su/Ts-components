export function mapMethods (obj, keys) {
    let clonedObj = { ...obj }

    const originKeys = Object.keys(clonedObj)
    const targetKeys = keys

    originKeys.map(originKey => {
        if (!targetKeys.includes(originKey)) {
            delete clonedObj[originKey]
        }
    })

    return clonedObj
}