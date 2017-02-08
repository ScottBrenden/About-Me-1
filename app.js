'use strict';

var confirmQuiz = confirm('Hello, would you like take a quiz?');

if(confirmQuiz === true) {
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

var quizResponseOne = prompt('Please Answer with Y or N. Does Enrique have any siblings?');

if(quizResponseOne.toUpperCase() === 'Y') {
  console.log('That is correct! Enrique has 4 brothers and 4 sisters.');
} else {
  console.log('Enrique is latino, so of course he has siblings! :P');
}

var quizResponseTwo = prompt('Once again please answer with Y or N. Does Enrique love dogs?');

if(quizResponseTwo.toUpperCase() === 'Y') {
  var inceptionQuestion = prompt('WAIT ARE YOU SURE HE DOES? Answer Y or N');
  if(inceptionQuestion.toUpperCase() === 'Y') {
    console.log('Hell yeah he does! Have you met him already?');
  } else {
    console.log('You\'re wrong! Not even close to being right. Learn more about him!');
  }
} else {
  console.log();
}
