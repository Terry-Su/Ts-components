import mapMethods from './mapMethods'
import mapPlainObjectValuesAToB from './mapPlainObjectValuesAToB'


export function mapMethodsFromAToB(a, b, methods) {
    const methodsPlainObject = mapMethods(a, methods)
    
    mapPlainObjectValuesAToB(methodsPlainObject, b)
}