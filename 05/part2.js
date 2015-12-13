var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf8');

// looking for nice lines
// rules:
// 1. must have two double letter pairs (aajksdjaa, bbbb, NOT aaa)
// 2. contains a letter sandwich (xyx, efe, aaa)
var niceLineCount = 0;

// split all the lines and loop through them
var lines = input.split('\n');

// Test One:

// Test Two:
// does it contain a double letter?
function doubleLetterChecker(line) {
  if ((/([a-z])\1/i).test(line)) {
    return true;
  }
  return false;
}

function doubleLetterPairChecker(line){
  doublesObj = {};

  if (doubleLetterChecker(line)) {
    //doublesObj gets a key with this pairing at 1
    // then continue looking and if it comes up again, increment that
    // if its 2+, the string passes this test
    return('hi');
  }

  return false;
}

function letterSandwichChecker(){

}




// going through each line here
// and applying the tests
for(var i = 0;i < lines.length; i++){
  var line = lines[i];

  console.log(doubleLetterPairChecker(line))
}

console.log(niceLineCount);