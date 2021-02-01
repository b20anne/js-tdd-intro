const assert = require('assert');

function capitalizeFirstLetters(input) {
	return input.split(" ")
		.map(function(word) {
			return word.length > 0
	    		? word[0].toUpperCase() + word.slice(1)
	    		: '';
			})
		.join(" ");
}

//   is a function that accepts one argument
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);

// transforms one word correctly
assert.strictEqual(capitalizeFirstLetters('capital'), 'Capital');

// works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('a'), 'A');

// works with multiple words
assert.strictEqual(capitalizeFirstLetters("i am learning TDD"), "I Am Learning TDD");

// works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');


