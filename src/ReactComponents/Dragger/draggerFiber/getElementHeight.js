export function getElementHeight() {
    try {
        return this.element.getBoundingClientRect().height
    } catch (e) {
        return 0
    }
}