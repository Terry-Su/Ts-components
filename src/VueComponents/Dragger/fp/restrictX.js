const isDraggingElemntWiderThanRestrictElement = (draggingElementWidth, restrictElementWidth) => {
    return draggingElementWidth > restrictElementWidth
}


export function restrictX(theX = 0, width, getRestrictElement) {
    let x = theX
    const restrictElement = getRestrictElement()

    if (restrictElement) {
        let boundLeft
        let boundRight
        const restrictElementWidth = restrictElement.getBoundingClientRect().width

        if (isDraggingElemntWiderThanRestrictElement(width, restrictElementWidth)) {
            boundLeft = -1 * (width - restrictElementWidth)
            boundRight = width
        }

        if (!isDraggingElemntWiderThanRestrictElement(width, restrictElementWidth)) {
            boundLeft = 0
            boundRight = restrictElementWidth
        }

        x = x < boundLeft ? boundLeft : x
        x = x + width > boundRight ? boundRight - width : x
    }


    return x
}