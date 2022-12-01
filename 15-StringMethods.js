const sentence = "A santa, at NASA"; //we want to remove that comma. And separate the string with '_'.
const splitSentence = sentence.split(",");
const joinSentence = splitSentence.join("");
const finalSentence = joinSentence.split(" ").join("_");
console.log({ splitSentence, joinSentence });
console.log(finalSentence);

// .replace() and .replaceAll method.

const sentenceWithoutComma = sentence.replace(",", ""); //Will replace only the first comma found.
console.log("Sentece with replace: ", sentenceWithoutComma);
console.log(
  "All a's like 'o's'",
  sentence.replaceAll("a", "o").replaceAll("A", "O")
);

const commaSentece = "Hello, how, is, everything, going???, how_are_you";
console.log(
  commaSentece
    .replaceAll(",", "")
    .replaceAll("?", "")
    .replaceAll("_", " ")
    .replace("llo", "llo,")
);
