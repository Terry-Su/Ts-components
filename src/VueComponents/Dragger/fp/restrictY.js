export function restrictY(theY = 0, height, restrictElement) {
    let y = theY

    if (restrictElement()) {
        const boundTop = 0
        const boundBottom = restrictElement().getBoundingClientRect().height

        y = y < boundTop ? boundTop : y
        y = y + height > boundBottom ? boundBottom - height : y
    }

    return y
}