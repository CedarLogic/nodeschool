var fs = require('fs')

var file = process.argv[2]

var val = fs.readFileSync(file)
var lines = val.toString().split('\n')

console.log(lines.length-1)
