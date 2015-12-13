var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf8');

// looking for nice lines
// rules:
// 1. must have two double letter pairs (aajksdjaa, bbbb, NOT aaa)
// 2. contains a letter sandwich (xyx, efe, aaa)
// shoutout to http://regexr.com/

var niceLineCount = 0;

// split all the lines and loop through them
var lines = input.split('\n');

// Test One:
// does it contain a double letter?
function doubleLetterPairChecker(line){
  if ((/([a-z][a-z])[a-z]*\1/g).test(line)) {
    return true;
    }

  return false;
}

function letterSandwichChecker(){
  if ((/([a-z])[a-z]\1/g).test(line)) {
    return true;
    }

  return false;
}




// going through each line here
// and applying the tests
for(var i = 0;i < lines.length; i++){
  var line = lines[i];

  if (letterSandwichChecker(line) && doubleLetterPairChecker(line)) {
    niceLineCount++;
  }
}

console.log(niceLineCount);