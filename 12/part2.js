var fs = require('fs');
var input = JSON.parse(fs.readFileSync('./input.json', 'utf8'));

// I got this solution from reddit bc i got stuck

function add(obj) {
  var total = 0;

  // if its an object and not an array
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    // check each key to see if it is "red"
    for (key in obj) {
      if (obj[key] === 'red')
        // if its red, return and don't add up to the total
        return false;
    }
  }

  // for every key in the object
  for (var key in obj) {
      // if the key is a key itself, recurse!
      if (typeof obj[key] === 'object')
          total += add(obj[key]); // this line i dont understand. why add to total here as well as recurse?

      // if the key is a number, add it to the total
      else if (typeof obj[key] === 'number') {
          total += obj[key];
      }
  }
  return total;
}

console.log(add(input));
