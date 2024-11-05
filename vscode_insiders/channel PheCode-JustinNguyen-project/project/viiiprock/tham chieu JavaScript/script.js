function defineWord(word) {
  word = "word";
  console.log(word);
}

let globalWord = "hello";
defineWord(globalWord);
console.log(globalWord);
