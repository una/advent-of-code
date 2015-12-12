var crypto = require('crypto');
var input = "bgvyzdsv";
var found = false;

// keep creating hashes until we find one that starts with "00000"
for(var i=0; found != true ; i++){

  var hash = crypto.createHash('md5');
  var inputHashed = input + i;
  hash.update(inputHashed);

  var newHash = hash.digest('hex');

  // if the hash starts with "00000"
  if(newHash.slice(0,5)==="00000"){
    found = true;
    console.log(i);
  }
}