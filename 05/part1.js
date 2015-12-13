var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf8');

// looking for nice lines
// rules:
// 1. must have double letter (aa, bb)
// 2. must have at leat 3 vowels
// 3. must not contain phrases:
//    ab, cd, pq, or xy
var niceLineCount = 0;

// split all the lines and loop through them
var lines = input.split('\n');

// Test One:
// does it have 3 vowels?
function vowelChecker(line) {
  'use strict';
  var vowelChecker = 0;

  for (var n = 0; n < line.length; n++) {
    switch (line[n]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelChecker++;
        break;
    }
  }

  // if vowel count < 3, line is
  // not eligible for nice list
  if (vowelChecker < 3) {
    return false;
  }

  return true;
}

// Test Two:
// does it contain a double letter?
function doubleLetterChecker(line) {
  if ((/([a-z])\1/i).test(line)) {
    return true;
  }

  return false;
}

// Test Three:
// can't contain certain phrases
function phraseChecker(line) {
  if (line.indexOf('ab') != -1 ||
      line.indexOf('cd') != -1 ||
      line.indexOf('pq') != -1 ||
      line.indexOf('xy') != -1) {
        return false;
  }

  return true;
}


// going through each line here
// and applying the tests
for(var i = 0;i < lines.length; i++){
  var line = lines[i];

  if (vowelChecker(line) && doubleLetterChecker(line) &&phraseChecker(line)) {
    niceLineCount++;
  }
}

console.log(niceLineCount);