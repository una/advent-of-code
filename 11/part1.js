var input = 'hxbxwxba';

// regex no o's i's or l's
var noOil = '^[^iol]+$/gm';

// sequential chars regex:
var seqChar = '/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i/gm';

// repeated chars regex:
var repeatedChar = '(.)\1/mg';

// regex checks for the password to get approved
function checkPassRegex(passInput) {
    // no o, i, or l allowed
    var re = /^[^iol]+$/gm;
    if (passInput.match(re)) {
        return false;
    }

    // must have 2 double letters
    re = /(..).*\1/g;
    if (passInput.match(re) === null) {
        return false;
    }

    // must match one of these
    re = /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/gm;
    if (passInput.match(re) === null) {
        return false;
    }
    return true;
}

// get a new password if the previous one failed
function getNewPass(passInput) {
  // get last char an increment
  var lastLetterChange = String.fromCharCode(passInput.charCodeAt(7) + 1);
  var firstLetterChange = String.fromCharCode(passInput.charCodeAt(0) + 1);

  passInput = passInput.replace(/[a-z]\b/g,lastLetterChange);

  // if the letter changed to a, increment the first letter
  if (lastLetterChange === 'a') {
    passInput.replace(/\b[a-z]/g,firstLetterChange);
  }

  return passInput;
}

function findPassword(passInput) {
  if (!checkPassRegex(passInput)) {
    passInput = getNewPass(passInput);
    findPassword(passInput);
  }
  else {
    console.log(passInput);
  }
}

console.log(findPassword(input));

// console.log(checkPassRegex(input));