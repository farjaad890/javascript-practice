const sentence = "Hello, world! Welcome to JavaScript";

function reverseSentence(sentence) {
  let newSentence = sentence.split(" ");
  newSentence.reverse();
  console.log(newSentence.join(" "));
}
function reverseSentencewithLoopandSplit(sentence) {
  let newSentence = sentence.split(" ");
  let newSentenceReversearray = [];
  for (let i = newSentence.length - 1; i >= 0; i--) {
    newSentenceReversearray.push(newSentence[i]);
    //console.log(newSentence[i]);
  }
  console.log(newSentenceReversearray.join(" "));
}
function reverseSentencewithLoop(sentence) {
  let newSentence = "";
  let tempString = "";
  let tempArrar = [];
  for (let i = 0; i < sentence.length; i++) {
    tempString += sentence[i];
    if (sentence[i] === " " || i == sentence.length - 1) {
      tempArrar.push(tempString);
      tempString = "";
    }
  }
  for (let j = tempArrar.length - 1; j >= 0; j--) {
    newSentence = newSentence + " " + tempArrar[j];
  }
  console.log(newSentence);
}
reverseSentencewithLoop(sentence);
