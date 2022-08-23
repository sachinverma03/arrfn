const arrModule=require('./index')

const ob=arrModule.arrayToObject(["a","b","c"],[1,2,3])

console.log(ob)
const [obKey, obVal]=arrModule.objectToArray(ob)
console.log(obKey)
console.log(obVal)