// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

const words = ['How', 'is', 'it', 'going', '?'];

const wordsString = words.join(' '); //Separator <> ','. We choose ' ' (space bar).
console.log(wordsString);