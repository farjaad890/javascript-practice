let licensePlate = "1s3 PSt";
let words = ["steps", "step"];

function shortestCompletingword(licensePlate, wordsArray) {
  let splitWords = licensePlate.split("");
  let charINlicense = [];
  let wordsDivide = {};
  let trueWords = {};
  for (character of splitWords) {
    //console.log(character);
    if (Number(character) || character == " ") {
    } else {
      charINlicense.push(character);
    }
  }
  //console.log(charINlicense);
  for (chrac of charINlicense) {
    let lowerCase = chrac.toLowerCase();
    if (wordsDivide[lowerCase]) {
      wordsDivide[lowerCase] += 1;
    } else {
      wordsDivide[lowerCase] = 1;
    }
  }
  let tempArray = [];
  //console.log(wordsDivide);
  for (const word of wordsArray) {
    let lowerCase = word.toLowerCase();
    let tempDividedword = lowerCase.split("");
    //console.log(tempDividedword);
    let tempwordinfo = {};
    for (eachcharc of tempDividedword) {
      if (tempwordinfo[eachcharc]) {
        tempwordinfo[eachcharc] += 1;
      } else {
        tempwordinfo[eachcharc] = 1;
      }
    }
    tempArray.push(tempwordinfo);
    //console.log(tempwordinfo);
  }
  console.log(tempArray);
  let checkAnswer = [];
  let check = 0;
  for (divword of tempArray) {
    check = 0;
    //console.log(divword);
    for (key in divword) {
      console.log(key);
      if (wordsDivide[key] == undefined) {
        console.log("true");
      } else {
        if (wordsDivide[key] != divword[key]) {
          console.log(wordsDivide[key]);
          console.log(divword[key]);
          check = 1;
          break;
        }
      }
      //console.log(divword[key]);
    }

    if (check == 0) {
      checkAnswer.push(divword);
    }
  }
  console.log(checkAnswer);
}
shortestCompletingword(licensePlate, words);
