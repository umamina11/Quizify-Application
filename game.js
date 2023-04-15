const question=document.getElementById('question');
 
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
        Choice4: "Folder"
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        choice1: " The contents are displayed by non-JS-based browsers.",
        choice2: " Clears all the cookies",
        choice3: " Both A and B",
        choice4: " None of the above"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        choice1: "Head, Title, HTML, body",
        choice2: "HTML, Body, Title, Head",
        choice3: "HTML, Head, Title, Body",
        choice4: "HTML, Head, Title, Body"
    },
    {
        question: " Which of the following is not javascript data types?",
        choice1: " Null type",
        choice2: " Undefined type",
        choice3: " Number type",
        choice4: " All of the mentioned"
    },
    {
        question: " <input> is -",
        choice1: "a format tag",
        choice2: "an empty tag",
        choice3: "All of the above",
        choice4: "None of the above"
    },
    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        choice1: "<marquee>",
        choice2: "<scroll>",
        choice3: "<div>",
        choice4: "None of the above"
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        choice1: "Function/Method",
        choice2: "Preprocessor",
        choice3: "Triggering Event",
        choice4: "RMI  "
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
