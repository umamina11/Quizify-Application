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
    }
]
