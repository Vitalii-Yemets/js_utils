export function mergeUnique<T>(array1: Array<T>, array2: Array<T>, filter: (el1: T, el2: T) => boolean): Array<T>