export declare function and<T, V>(array1: Array<T>, array2: Array<V>): Array<[T, V]>
export declare function first<T>(array: Array<T>, filter: (el: T) => boolean): T | null
export declare function indexOf<T>(array: Array<T>, filter: (el: T) => boolean): number
export declare function isDifferent<T>(array1: Array<T>, array2: Array<T>, predicate: (el1: T, el2: T) => boolean): boolean
export declare function isInclude<T>(array: Array<T>, selector: T | ((el: T) => boolean)): boolean