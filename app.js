'use strict';

var confirmQuiz = confirm('Hello, would you like take a quiz?');
if(confirmQuiz === true) {
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too Bad, starting anyway.');
}

var user = prompt('What is your name?');
console.log(user + '? ' + 'That\'s a pretty cool name!');

alert('Okay ' + user + ', first question!');

var quizResponseOne = prompt( user + ' please answer with "Y" or "N" for all questions. Does Enrique have any siblings?');
if(quizResponseOne.toUpperCase() === 'Y') {
  console.log('That is correct! Enrique has 4 brothers and 4 sisters.');
} else if (quizResponseOne.toUpperCase() === 'N') {
  console.log('Enrique is latino, so of course he has siblings! Enrique has 4 brothers and 4 sisters.');
} else {
  console.log('So...... that\'s not a Y or N response, but I\'ll let it slide this time. Enrique has 4 brothers and 4 sisters.');
}

var quizResponseTwo = prompt('Once again please answer with Y or N. Does Enrique love dogs?');
if(quizResponseTwo.toUpperCase() === 'Y') {
  var inceptionQuestion = prompt('WAIT ARE YOU SURE HE DOES? Answer Y or N.');
  if(inceptionQuestion.toUpperCase() === 'Y') {
    console.log('Hell yeah he does! ' + user + ' have you met Enrique already?');
  } else {
    console.log('You\'re wrong! Not even close to being right.' + user + ' you should learn more about him!');
  }
} else if (quizResponseTwo.toUpperCase() === 'N') {
  console.log('You\'re wrong! Who doesn\'t love dogs!?');
}else {
  console.log(user + ' you don\'t like to listen to directions do you? I\'ll give you this one again, he LOVES them!');
}

var questionResponseThree = prompt('Question #3. ' + user + ' , does Enrique love pizza? Y or N');
if(questionResponseThree.toUpperCase() === 'Y') {
  console.log(user + ' you must love pizza just as much as Enrique!');
} else {
  console.log('I don\'t want to say you\'re wrong, but you\'re wrong.');
}
