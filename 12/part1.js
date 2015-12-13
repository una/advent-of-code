var fs = require('fs');
var input = fs.readFileSync('./input.json', 'utf8');

var allNumsString = "";

// replace all non-numbers with "+" and add 0 after so the string doesn't end with a "+"
allNumsString += input.replace(/[^-\d]+/g,"+") + 0;

console.log(eval(allNumsString));