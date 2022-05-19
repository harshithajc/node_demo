

const names=require('./name')
const sayHi=require("../first_project/utilities")
const personName=require("./alternative")
require("./mind-granate")

// from name
console.log(names);

// from alternative
console.log(personName);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


