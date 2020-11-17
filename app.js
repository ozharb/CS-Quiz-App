/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'HTML is what type of language?',
      answers: [
        'Programming Language',
        'Scripting Language',
        'Markup Language',
        'Romance Language'
      ],
      correctAnswer: 'Markup Language'
    },
    {
      question: 'Which computer hardware device provides an interface for all other connected devices to communicate?',
      answers: [
        'Central Processing Unit',
        'Hard Disk Drive',
        'Random Access Memory',
        'Motherboard'
      ],
      correctAnswer: 'Motherboard'
    },
    {
      question: 'This mobile OS held the largest market share in 2012.',
      answers: [
        'Android',
        'iOS',
        'BlackBerry',
        'Symbian'
      ],
      correctAnswer: 'iOS'
    },
    {
      question: 'Which programming language shares its name with an island in Indonesia?',
      answers: [
        'Python',
        'Jakarta',
        'C',
        'Java'
      ],
      correctAnswer: 'Java'
    },
    {
      question: 'What language does Node.js use?',
      answers: [
        'JavaScript',
        'Java',
        'Java Source',
        'Joomla Source Code'
      ],
      correctAnswer: 'JavaScript'
    },

  ],
  quizStarted: false,
  questionNumber: 0,//increment this
  score: 0
};


function generateMainPage(){
return `div`

}

function generateQuestion(){
  let question = store.questions[store.questionNumber];
;
return `div class='mainPage">
<form id=question'>
<h2>${question.question}</h2>
<input type='radio" id='answer1' name='answer' value='${question.answers[0]}'>
<label for ='male'>${questions.answers[0]}>`

}

/*
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz(){

  $(main).on('click', '#startQuiz', function(evt){
    store.quizStarted=true;

  })
}

function render(){
  let html = ''
  if (store.quizStarted ===false){

    html =  generateMainPage(){
      let question = store.questions[store.questionNumber]
      return `<h2>$(questions.question)`
    }
  }

  $('main').html(html)

}

function main(){
  render();
  handleStartQuiz();

}
