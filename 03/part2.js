var fs = require("fs");
var input = fs.readFileSync("./input.txt", "utf8");

// both start by giving gift at (0,0)
var santaHomes = { '0,0': 1 };
var roboSantaHomes = { '0,0': 1 };
var x = 0, y = 0;
var a = 0, b = 0;

for (var i = 0; i < input.length; i++) {

  // only the normal santa moves:
  if (input[i] % 2) {
    switch (input[i]) {
      case '<':
        y--;
        break;
      case '>':
        y++;
        break;
      case '^':
        x++;
        break;
      case 'v':
        x--;
        break;
    }

    // for each move, record the grid location:
    normalSanta = x + ',' + y;

    if (!santaHomes[normalSanta]) {
      santaHomes[normalSanta] = 1;
    }
  }

  // robo santa coords
  else {
    switch (input[i]) {
      case '<':
        b--;
        break;
      case '>':
        b++;
        break;
      case '^':
        a++;
        break;
      case 'v':
        a--;
        break;
    }

    // for each move, record the grid location:
    roboSanta = a + ',' + b;

    if (!roboSantaHomes[roboSanta]) {
      roboSantaHomes[roboSanta] = 1;
    }
  }

  console.log(normalSanta);
}

console.log(Object.keys(santaHomes).length);