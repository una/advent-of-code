// answer to part 1 was: hxbxxyzz
// so the next valid entry is:
var input = 'hxcaabcc';

// test letter consecutiveness
var testOne = /(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/;

// test that it does not have i l or o
var testTwo = /[^ilo]/;

// test that ther are two letter pairs
var testThree = /(.)\1.*(.)\2/;

while(
  // if any of the tests fail, keep going
  !testOne.test(input) ||
  !testTwo.test(input) ||
  !testThree.test(input)
  ) {

  // update the password input to replace the last letter by incrementing it a character
  // replace z with a
  input = (parseInt(input, 36) + 1).toString(36).replace(/0/, 'a');
}

console.log(input);
