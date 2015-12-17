'use strict';
var input = '1321131112';

// for each char in the string,
// regex to look backward and check to see if there are mutiple of it until the digit changes
// record how many there are
// record the digit itself

var consecNums = /([0-9])\1+/g;
var match;

while (match = consecNums.exec(input)) {
   console.log('match: ' + match.index);
}
// var consecMatches = input.match(consecNums).index;

for (let i = 0; i < input.length; i++) {
  //if not a match

  console.log("1" + input[i]);
}

console.log(input.length);