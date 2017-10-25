export function getElementWidth() {
    try {
        return this.element.getBoundingClientRect().width
    } catch (e) {
        return 0
    }
}