const assert = require("assert");

function capitalizeFirstLetters(input) {
  return input
    .split(" ")
    .map(function (word) {
      return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "";
    })
    .join(" ");
}

module.exports = capitalizeFirstLetters;
