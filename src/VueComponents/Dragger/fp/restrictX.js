export function restrictX(theX = 0, width, getRestrictElement) {
    let x = theX

    if (getRestrictElement()) {
        const boundLeft = 0
        const boundRight = getRestrictElement().getBoundingClientRect().width
        
        x = x < boundLeft ? boundLeft : x
        x = x + width > boundRight ? boundRight - width : x
    }

    return x
}