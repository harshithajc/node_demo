const path= require('path')

console.log(path.sep)

const filepath=path.join('/content/','subtext','txt.js')
console.log(filepath);

const base=path.basename(filepath)
console.log(base);

const absolute=path.resolve(__dirname,"content",'subtext','txt.js')
console.log(absolute);