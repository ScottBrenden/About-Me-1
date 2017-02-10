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

// Start of question 1 with var prompt
function responseOne(){
  var quizResponseOne = prompt( user + ' please answer with "Y" or "N" for all questions. Does Enrique have any siblings?');

  if(quizResponseOne.toUpperCase() === 'Y') {
    console.log('That is correct! Enrique has 4 brothers and 4 sisters.');
  } else if (quizResponseOne.toUpperCase() === 'N') {
    console.log('Enrique is latino, so of course he has siblings! Enrique has 4 brothers and 4 sisters.');
  } else {
    console.log('So...... that\'s not a Y or N response, but I\'ll let it slide this time. Enrique has 4 brothers and 4 sisters.');
  }
}
responseOne();
// Start of question 2 with var prompt
function responseTwo(){
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
}
responseTwo();
  //Start of question 3 with var prompt
function responseThree(){
  var questionResponseThree = prompt('Question #3. ' + user + ' , does Enrique love pizza? Y or N.');

  if(questionResponseThree.toUpperCase() === 'Y') {
    console.log(user + ' you must love pizza just as much as Enrique!');
  } else if(questionResponseThree.toUpperCase() === 'N') {
    console.log('I don\'t want to say you\'re wrong, but you\'re wrong.');
  } else {
    console.log('Are you having fun? I\'m guessing you\'re typing poop or something weird like that aren\'t you?');
  }
}
responseThree();
  //Start of question 4 with var prompt
function responseFour(){
  var questionResponseFour = prompt(user + ' do you think Enrique likes to fish? Y or N.');

  if(questionResponseFour.toUpperCase() === 'Y') {
    console.log('He does like to fish! The fight you get when a fish is on the hook is what Enrique loves most about fishing.');
  } else if(questionResponseFour.toUpperCase() === 'N') {
    console.log('I\'m sorry but you\'re wrong. Enrique enjoys fishing.');
  } else {
    console.log('At this point I\'m guessing your Y and N keys are broken.');
  }
}
responseFour();
alert('By the end of this you\'ll know about Enrique as if you were a sibling of his!');

  //Start of question 5 with var prompt
function responseFive() {
  var questionResponseFive = prompt('Do you think Enrique\'s favorite movie is Good Will Hunting? Y or N.');

  if(questionResponseFive.toUpperCase() === 'Y') {
    console.log('You\'ve known Enrique for a while now haven\'t you, because you are correct!');
  } else if(questionResponseFive.toUpperCase() === 'N'){
    console.log(user + ' how is this not his favorite movie. In fact how is this not everyone\'s favorite movie. You\'re wrong ' + user + '.');
  } else {
    console.log('I\'m wondering how much fun you\'re having right now........ He loves it by the way.');
  }
}
responseFive();
//-----------Number Game---------------------
//var numberQuestion = prompt(user + ' what do you think is Enrique\'s favorite between 1-10 is? I\'ll give you four attempts.');
var correctNumber = '7';
var tries = 4;
//var numberQuestion = prompt(user + ' what do you think is Enrique\'s favorite between 1-10 is? I\'ll give you four attempts.');
function numGame() {
  for(var i = 0;i < 4; i++) {
    var numberQuestion = prompt(user + ' what do you think is Enrique\'s favorite between 1-10 is? I\'ll give you four attempts.');
    if(numberQuestion === '7'){
      alert(user + ' you are correct! 7 is his favorite number!');
      break;
    } else if (i = tries) {
      alert ('Sorry ' + user + ' better luck next time.');
      break;
    } else{
    }
  }
}
numGame();
