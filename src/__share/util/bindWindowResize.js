const isFunction = item => item === 'function'

export function bindWindowResize(callback) {
  const cloneOnResize = window.onresize
  return window.onresize = (...args) => {
    isFunction(cloneOnResize) && cloneOnResize.bind(window)(...args)
    callback(...args)
  }
} 