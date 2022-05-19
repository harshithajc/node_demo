const lod= require("lodash")

const arr=[1,[2,[3,[4]]]]
const newArr=lod.flattenDeep(arr)
console.log(newArr);