/**
 * Initializes the quiz when the DOM content is fully loaded. It sets up the quiz container and the submit button functionality.
 */
document.addEventListener('DOMContentLoaded', function() {
  const quizContainer = document.getElementById('quiz-container');
  renderQuiz(quizData, quizContainer);

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', submitQuiz);
});

/**
 * Renders the quiz questions and options within the given container.
 * @param {Object} quizData - The data for the quiz including questions and answers.
 * @param {HTMLElement} container - The DOM element where the quiz will be rendered.
 */
function renderQuiz(quizData, container) {
  // ... Code to render the quiz ...
  const quiz = document.createElement('ol');
  container.appendChild(quiz);

  const quizQuestions = quizData.questions

  quizQuestions.forEach(function(q) {
    const quizQ = document.createElement('li');
    quizQ.classList.add(q.type, 'question');
    quizQ.innerHTML = q.question;
    quiz.appendChild(quizQ);
})

const singleAnswers = document.getElementsByClassName('single-answer');
  const question1 = singleAnswers[0];
  const question2 = singleAnswers[1];
  const question3 = singleAnswers[2];
  const question4 = singleAnswers[3];
  const question5 = singleAnswers[4];
  const question6 = singleAnswers[5];
  const options1 = quizQuestions[0].options;
  const options2 = quizQuestions[1].options;
  const options3 = quizQuestions[2].options;
  const options4 = quizQuestions[3].options;
  const options5 = quizQuestions[4].options;
  const options6 = quizQuestions[5].options;
  const answer1 = quizQuestions[0].answer;
  const answer2 = quizQuestions[1].answer;
  const answer3 = quizQuestions[2].answer;
  const answer4 = quizQuestions[3].answer;
  const answer5 = quizQuestions[4].answer;
  const answer6 = quizQuestions[5].answer;

  // START OF QUESTION 1

  options1.forEach(function(o) {
    const radio1 = document.createElement('input')
      radio1.type = 'radio';
      radio1.name = 'question1';
      radio1.value = o;
      radio1.setAttribute('data-correct', radio1.value === answer1);

    const radioLabel1 = document.createElement('label');
      radioLabel1.innerHTML = o;

      question1.appendChild(radioLabel1);
      radioLabel1.appendChild(radio1);
  })

    // END OF QUESTION 1

    // START OF QUESTION 2

  options2.forEach(function(o) {
    const radio2 = document.createElement('input');
      radio2.type = 'radio';
      radio2.name = 'question2';
      radio2.value = o;
      radio2.setAttribute('data-correct', radio2.value === answer2);

    const radioLabel2 = document.createElement('label');

      question2.appendChild(radioLabel2);
      radioLabel2.innerHTML = o;
      radioLabel2.appendChild(radio2);
  })

  // END OF QUESTION 2

  // START OF QUESTION 3

  options3.forEach(function(o) {
    const radio3 = document.createElement('input');
      radio3.type = 'radio';
      radio3.name = 'question3';
      radio3.value = o;
      radio3.setAttribute('data-correct', radio3.value === answer3);

    const radioLabel3 = document.createElement('label');
      radioLabel3.innerHTML = o;

      question3.appendChild(radioLabel3);
      radioLabel3.appendChild(radio3);
  })

  // END OF QUESTION 3

  // START OF QUESTION 4

  options4.forEach(function(o) {
    const radio4 = document.createElement('input');
      radio4.type = 'radio';
      radio4.name = 'question4';
      radio4.value = o;
      radio4.setAttribute('data-correct', radio4.value === answer4);

    const radioLabel4 = document.createElement('label');
      radioLabel4.innerHTML = o;

      question4.appendChild(radioLabel4);
      radioLabel4.appendChild(radio4);
  })

  // END OF QUESTION 4

  // START OF QUESTION 5

  options5.forEach(function(o) {
    const radio5 = document.createElement('input');
      radio5.type = 'radio';
      radio5.name = 'question5';
      radio5.value = o;
      radio5.setAttribute('data-correct', radio5.value === answer5);

    const radioLabel5 = document.createElement('label');
      radioLabel5.innerHTML = o;

      question5.appendChild(radioLabel5);
      radioLabel5.appendChild(radio5);
  })

  // END OF QUESTION 5

  // START OF QUESTION 6

  options6.forEach(function(o) {
    const radio6 = document.createElement('input')
      radio6.type = 'radio';
      radio6.name = 'question6';
      radio6.value = o;
      radio6.setAttribute('data-correct', radio6.value === answer6)

    const radioLabel6 = document.createElement('label');
      radioLabel6.innerHTML = o;

      question6.appendChild(radioLabel6);
      radioLabel6.appendChild(radio6);
  })

  // END OF QUESTION 6

  const multipleAnswers = document.getElementsByClassName('multiple-answer');
  const question7 = multipleAnswers[0];
  const question8 = multipleAnswers[1];
  const question9 = multipleAnswers[2];
  const options7 = quizQuestions[6].options;
  const options8 = quizQuestions[7].options;
  const options9 = quizQuestions[8].options;
  const answer7 = quizQuestions[6].answers;
  const answer8 = quizQuestions[7].answers;
  const answer9 = quizQuestions[8].answers;

  // START OF QUESTION 7

  options7.forEach(function(o) {
    const cbox1 = document.createElement('input');
      cbox1.type = 'checkbox';
      cbox1.name = 'question7';
      cbox1.value = o;
      cbox1.setAttribute('data-correct', cbox1.value === answer7[0] || 
        cbox1.value === answer7[1] ||
        cbox1.value === answer7[2] )

    const cboxLabel1 = document.createElement('label');
      cboxLabel1.innerHTML = o;

      question7.appendChild(cboxLabel1)
      cboxLabel1.appendChild(cbox1);
  })

  // END OF QUESTION 7

  // START OF QUESTION 8

  options8.forEach(function(o) {
    const cbox2 = document.createElement('input');
      cbox2.type = 'checkbox';
      cbox2.name = 'question8';
      cbox2.value = o;
      cbox2.setAttribute('data-correct', cbox2.value === answer8[0] || 
        cbox2.value === answer8[1] ||
        cbox2.value === answer8[2] )

    const cboxLabel2 = document.createElement('label');
      cboxLabel2.innerHTML = o;

      question8.appendChild(cboxLabel2)
      cboxLabel2.appendChild(cbox2);
  })

  // END OF QUESTION 8

  // START OF QUESTION 9

  options9.forEach(function(o) {
    const cbox3 = document.createElement('input');
      cbox3.type = 'checkbox';
      cbox3.name = 'question9';
      cbox3.value = o;
      cbox3.setAttribute('data-correct', cbox3.value === answer9[0] || cbox3.value === answer9[1])

    const cboxLabel3 = document.createElement('label');
      cboxLabel3.innerHTML = o;

      question9.appendChild(cboxLabel3)
      cboxLabel3.appendChild(cbox3);
  })

  // END OF QUESTION 9

  const freeForm = document.getElementsByClassName('free-form');
  const question10 = freeForm[0];
  const question11 = freeForm[1];
  const question12 = freeForm[2];
  const answers10 = quizQuestions[9].answers;
  const answers11 = quizQuestions[10].answers;
  const answers12 = quizQuestions[11].answers;

  // START OF QUESTION 10

    const txtBox1 = document.createElement('input');
      txtBox1.type = 'text';
      txtBox1.name = 'question10';
      txtBox1.setAttribute('data-correct-answers', [answers10[0], answers10[1]])

    const txtBoxLabel1 = document.createElement('label');

      question10.appendChild(txtBoxLabel1)
      txtBoxLabel1.appendChild(txtBox1);

  // END OF QUESTION 10

  // START OF QUESTION 11

    const txtBox2 = document.createElement('input');
      txtBox2.type = 'text';
      txtBox2.name = 'question11';
      txtBox2.setAttribute('data-correct-answers', answers11[0])

    const txtBoxLabel2 = document.createElement('label');

      question11.appendChild(txtBoxLabel2)
      txtBoxLabel2.appendChild(txtBox2);

  // END OF QUESTION 11

  // START OF QUESTION 12

    const txtBox3 = document.createElement('input');
      txtBox3.type = 'text';
      txtBox3.name = 'question12';
      txtBox3.setAttribute('data-correct-answers', [answers12[0], answers12[1]])

    const txtBoxLabel3 = document.createElement('label');

      question12.appendChild(txtBoxLabel3)
      txtBoxLabel3.appendChild(txtBox3);

  // END OF QUESTION 12
}

/**
 * Checks if all quiz questions have been answered.
 * @return {Boolean} True if all questions are answered, false otherwise.
 */
function areAllQuestionsAnswered() {
  // ... Code to check if all questions are answered ...

  const questions = document.getElementsByClassName('question');

  for(let q of questions){
    const radioInputs = q.querySelectorAll('input[type="radio"]');
    const cboxInputs = q.querySelectorAll('input[type="checkbox"]');
    const txtInputs = q.querySelectorAll('input[type="text"]');
    let questionChecked = false;

    for(let radio of radioInputs) {
      if (radio.checked) {
        questionChecked = true;
      }
    };


    for(let cbox of cboxInputs) {
      if (cbox.checked) {
        questionChecked = true;
      }
    }

    for(let txt of txtInputs) {
      if (txt.value.trim() !== '') {
        questionChecked = true;
      }
    }

    if (!questionChecked) {
      return false
    }

  }

 return true;
 
}

/**
 * Checks if the answer provided for a single-answer question is correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if the answer is correct, false otherwise.
 */
function isSingleAnswerCorrect(question) {
  // ... Code to check single answer correctness ...]
  const selectedRadio = question.querySelector('input[type="radio"]:checked')
    if(selectedRadio.getAttribute('data-correct') === "true") {
      question.style.color = 'green';
      return true;
  } else if (selectedRadio.getAttribute('data-correct') === "false") {
      question.style.color = 'red';
      return false;
  }
}

/**
 * Checks if the answers provided for a multiple-answer question are correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if all correct answers are selected, false otherwise.
 */
function isMultipleAnswerCorrect(question) {
  // ... Code to check multiple answer correctness ...
  const selectedCbox = question.querySelectorAll('input[type="checkbox"]:checked');
  const cboxTrue = question.querySelectorAll('input[type="checkbox"][data-correct="true"]')
  let cboxCorrect = 0;

    for (let i = 0; i < selectedCbox.length; i++) {
      if (selectedCbox[i].getAttribute('data-correct') === "true") {
        cboxCorrect++
      } else if (selectedCbox[i].getAttribute('data-correct') === "false") {
        question.style.color = 'red';
      }
    }

    if (selectedCbox.length < cboxTrue.length ||
        selectedCbox.length > cboxTrue.length) {
        question.style.color = 'red';
        return false;
    }

    if (cboxCorrect === cboxTrue.length) {
      question.style.color = 'green';
      return true;
    }
}

/**
 * Checks if the answer provided for a free-form question is correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if the free-form answer is correct, false otherwise.
 */
function isFreeFormAnswerCorrect(question) {
  // ... Code to check free-form answer correctness ...
  const txtInput = question.querySelector('input[type="text"]');
  const txtAnswers = txtInput.getAttribute('data-correct-answers');
  const txtSplit = txtAnswers.split(',')
  const txtValue = txtInput.value.trim();

  for (let i = 0; i < txtSplit.length; i++) {
    if (txtValue.toLowerCase() === txtSplit[i]) {
      question.style.color = 'green';
      return true;
    } 

    if (txtValue.toLowerCase() !== txtSplit[i]) {
      question.style.color = 'red'
    }
  }


}

/**
 * Submits the quiz, checks all answers, calculates the score, and displays it.
 * Alerts the user if not all questions have been answered.
 */
function submitQuiz() {
  // ... Code to submit the quiz and display the score .

  if(areAllQuestionsAnswered() === true) {
    createScoreDisplay()
  } else {
    alert('All questions not answered, please select or enter an answer.')
  }
}

/**
 * Creates and returns a new score display element.
 * @return {HTMLElement} The created score display element.
 */
function createScoreDisplay() {
  // ... Code to create a score display element ...
  const allQuestions = document.querySelectorAll('li.question')
  const singleQuestions = document.getElementsByClassName('single-answer');
  const multipleQuestions = document.getElementsByClassName('multiple-answer');
  const freeFormQuestions = document.getElementsByClassName('free-form');
  const result = document.getElementById('result');
  let score = 0;


  for(let s of singleQuestions) {
      const singleAnswer = isSingleAnswerCorrect(s)
      if (singleAnswer === true) {
        score++
        console.log(score);
      }
    }

    for(let m of multipleQuestions) {
      const multipleAnswer = isMultipleAnswerCorrect(m);
      if (multipleAnswer === true) {
        score++
        console.log(score);
      }
    }

    for(let f of freeFormQuestions) {
      const freeFormAnswer = isFreeFormAnswerCorrect(f);
      if (freeFormAnswer === true) {
        score++
        console.log(score);   
      }
    }

  result.innerHTML = 'Your score: ' + score + ' out of ' + allQuestions.length
}
