var express = require('express');
var app = express();

console.log("test");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

var toAdd = 23

function summer (sumVal) {
  return function (toAdd) {
    if (!toAdd) throw new Error('trying to pull a fast one?')
    return sumVal + toAdd
  }
}

module.exports = summer
