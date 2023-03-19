/**  creating a data set to store the questions  */

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
  
  function showQuestionAndOptions() {
    for (let i = 0; i < database.data.length; i++) {
      console.log("Q"[i], database.data[i].question);
    }
  }
  
  showQuestionAndOptions();