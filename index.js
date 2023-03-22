/**  creating a data set to store the questions  */
let readlineSync = require("readline-sync");
let score=0;
const database = {


  data: [
    {
      question: " Let a={}, b={} then if we do console.log(a==b)and console.log(a===b)",
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true"
      },
      correctAnswer: "a"
    },
    {
      question: "Object.assign(target, source) create which type of copy?",
      options: {
        a: "Deep copy",
        b: "Shallow copy",
        c: "Nested Copy",
        d: "Creates a new reference"
      },
      correctAnswer: "b"
    },
    {
      question: "Is Method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "b"
    }
  ]
}
//function to check the correct and the incorrect answers
function playGame(userAnswer,correctAnswer){
  if(userAnswer=== correctAnswer){
    console.log("Correct Answer");
    score++;
  }
  else{
    console.log("Incorrect Answer");
    console.log(`correct answer is ${correctAnswer}`);
  }
  
}
// function to display the questions and the options
function showQuestionAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i+1}-${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    // taking the input from the user
    let userAnswer = readlineSync.question("Enter your Answer -(a/b/c/d) - ");
  }
  playGame(userAnswer, database.data[i].correctAnswer)
}

showQuestionAndOptions(database);

console.log(score);