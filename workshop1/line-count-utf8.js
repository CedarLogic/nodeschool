var fs = require('fs')

var file = process.argv[2]

var val = fs.readFileSync(file,'utf8')
var lines = val.split('\n')

console.log(lines.length-1)
