const quizData = [
    {
        question: "Which HTML tag is used to link JavaScript file?",
        a: "<script>",
        b: "<js>",
        c: "<link>",
        d: "<scriptfile>", 
        correct: "a"
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-weight",
        b: "text-style",
        c: "font-size",
        d: "text-size", 
        correct: "c"
    },
    {
        question: "Inside which HTML element do we put the CSS?",
        a: "<style>",
        b: "<css>",
        c: "<link>",
        d: "<head>", 
        correct: "a"
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        a: "var",
        b: "string",
        c: "int",
        d: "dim", 
        correct: "a"
    }
];

const quiz = document.querySelector(".quiz-box");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answer => 
    answer.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(ans => {
        if(ans.checked){
            answer = ans.id;
        }
    });
    return answer;
}

loadQuiz();

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly🥳</h2>
            <button onclick="reset()">Try Again</button>`;
        }
    } else {
        alert("Please select the option");
    }
});