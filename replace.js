const handleWord = (word, from, to) => {
  if (word === from) {
    word = to;
  }

  //Check for puntuation after the word like exlamations, fullstops etc
  if (word.slice(0,-1) === from) {
    //change word to new word and add punctuation
    word = to + word[word.length -1];
  }

  //return result, whether it was changed or not
  return word;
}

const replace = (text, from, to) => {

  text = text.split(' ').map(word => {
    return handleWord(word, from, to);
  })
  
  return text.join(' ');
}

console.log(replace('The boy is bad', 'bad', 'good'));
console.log(replace('The boy is bad!', 'bad', 'good'));
console.log(replace('The food bad bad!', 'bad', 'good'));
console.log(replace('I am from Cyprus!', 'Cyprus', 'Laminol'));


//expect replace('The boy is bad', bad, good) to output 'The boy is good';
//expect replace('The boy is bad!', bad, good) to output 'The boy is good!';
//expect replace('The food bad bad!', bad, good) to output 'The food good good!';