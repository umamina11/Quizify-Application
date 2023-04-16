const question = document.getElementById("question");
 
const choices = Array.from(document.getElementsByClassName("Choice-text"));

//creating varibles that are going to be used 

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Question 

let questions = [
    {
        question: "The content of the page (such as your pictures, text, links) will show up here.",
        choice1: "Head",
        choice2: "Body",
        Choice3: "Style",
        Choice4: "Folder",
        answer: 2
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        choice1: " The contents are displayed by non-JS-based browsers.",
        choice2: " Clears all the cookies",
        choice3: " Both A and B",
        choice4: " None of the above",
        answer: 1
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        choice1: "Head, Title, HTML, body",
        choice2: "HTML, Body, Title, Head",
        choice3: "HTML, Head, Title, Body",
        choice4: "HTML, Title, Head, Body",
        answer: 3
    },
    {
        question: " Which of the following is not javascript data types?",
        choice1: " Null type",
        choice2: " Undefined type",
        choice3: " Number type",
        choice4: " None of the above",
        answer: 4
    },
    {
        question: " <input> is -",
        choice1: "a format tag",
        choice2: "an empty tag",
        choice3: "All of the above",
        choice4: "None of the above", 
        answer: 2
    },
    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        choice1: "<marquee>",
        choice2: "<scroll>",
        choice3: "<div>",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        choice1: "Function/Method",
        choice2: "Preprocessor",
        choice3: "Triggering Event",
        choice4: "RMI",
        answer: 1
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: ""
    },
    

]

//constants
const CORRECT_BONUS=10;
const MAX_QUESTIONS = 3;

startGame =()=>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
// if there is last question it will return to the last or end page
    if(availableQuestions.length=== 0|| questionCounter >=MAX_QUESTIONS){
    return window.location.assign("/end.html");
 }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    CurrentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice "+ number];

    });


    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers= true;
};

choice.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptingAnswer) return;

        acceptingAnswer= false;

        const selectedChoice= e.target;
        const selectedAnswer = selectedChoice.datset["number"];

        
        const classToApply = selectedAnswer==currentQuestion.answer ? 'correct' :'incorrect';
selectedChoice.parentElement.classList.add(classToApply);

setTimeout( ()=>{


selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
    });
});
startGame();
