//querySelectors
var questionInput = document.querySelector('#input-field');
var prompt = document.querySelector('.prompt')
var eightballView = document.querySelector(.'eight-ball')
var getYourAnswerButton = document.querySelector('.get-answer');
var clearButton = document.querySelector('.clear');
var randomAnswer = document.querySelector('.text')
//Event Listeners
getYourAnswerButton.addEventListener('click', loadRandomAnswer);
clearButton = document.querySelector('click', resetHome)
//Global Variables
var answer = ''


//Functions
function getRandomAnswer(array){
  return Math.floor(Math.random() * array.length);

function loadRandomAnswer(){
  questionInput.innerText = prompt.value
  eightballView.classList.add('hidden')
  getYourAnswer.classList.add('hidden')
  return possibleAnswers[getRandomAnswer(possibleAnswers)]
}

function showUserQuestionAndAnswer() {
  randomAnswer.innerHTML `<h3 class="text hidden" id="randomEightballAnswer">Inject Random Here ${possibleAnswers[getRandomAnswer(possibleAnswers)]}</h3>`
}

//Array:
possibleAnswers =
['It is certain',
'Without a doubt',
'Yes - definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Signs point to yes'.
'Reply hazy, try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now'
'Concentrate and ask again',
'Dont count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful']
