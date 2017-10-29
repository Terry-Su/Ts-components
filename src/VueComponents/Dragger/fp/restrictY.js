const isDraggingElemntHigerThanRestrictElement = (draggingElementHeight, restrictElementHeight) => {
    return draggingElementHeight > restrictElementHeight
}



export function restrictY(theY = 0, height, getRestrictElement) {
    let y = theY
    const restrictElement = getRestrictElement()

    if (restrictElement) {
        let boundTop
        let boundBottom
        const restrictElementHeight = restrictElement.getBoundingClientRect().height
        
        if (isDraggingElemntHigerThanRestrictElement(height, restrictElementHeight)) {
            boundTop = -1 * (height - restrictElementHeight)
            boundBottom = height
        }

        if (!isDraggingElemntHigerThanRestrictElement(height, restrictElementHeight)) {
            boundTop = 0
            boundBottom = restrictElementHeight
        }

        y = y < boundTop ? boundTop : y
        y = y + height > boundBottom ? boundBottom - height : y
    }

    return y
}