let seconds = 30;
let questionCounter = 0

let questionDisplay = $("#questiondisplay")
let firstAnswer = $("#answer1");
let secondAnswer = $("#answer2");
let thirdAnswer = $("#answer3");
let fourthAnswer = $("#answer4");

const displayAnswers = function () {
questionDisplay.text(this.question)
firstAnswer.text(this.a1[0])
secondAnswer.text(this.a2[0])
thirdAnswer.text(this.a3[0])
fourthAnswer.text(this.a4[0])
console.log("done");
}







let python = {
question: "What is the Python programming language named after?",
   a1: ["A horror movie", false],
   a2: ["A British comedy troupe", true],
   a3: ["A kind of snake", false],
   a4: ["An acronym", false],
   displayAnswers
};

let bug = {
    question: `Where does the programming term, "bug", get its name from?`,
    a1: "From how much it bugs the programmer",
    a2: "From the name of the first computer to have a bug",
    a3: "The first computer bug was an actual bug",
    a4: "Many of the earliest programmers liked to ride buggies.",
    displayAnswers

}

let jName = {
    question: "What was the original name of JavaScript?",
    a1: "Mocha",
    a2: "Java",
    a3: "FrappucinoScript",
    a4: "JavaCup",
    displayAnswers

}

let babbage = {
    question: "Who invented what is widely considered the first computer?",
    a1: "Galileo",
    a2: "Charles Babbage",
    a3: "Steve Jobs",
    a4: "Bill Gates",
    displayAnswers

}

let language = {
    question: "What is the name of the first programming langauge?",
    a1: "JavaScript",
    a2: "C",
    a3: "Visual Basic",
    a4: "Fortran",
    displayAnswers

}

let questionsArray = [python, bug, jName, babbage, language]

const checkAnswer = function (obj) {
    let choice = $(this).attr("id")
    if (choice === "answer1") {
        if (questionsArray[questionCounter]["a1"].includes(true)) {
            //run correct answer
        } else {
            //run incorrect answer
        }
;
    } else if (choice === "answer2") {
        console.log(choice);
    } else if (choice === "answer3") {
        console.log(choice);
    } else {
        console.log(choice);
    }

    // if (obj[answer].includes(true)) {
    //     console.log(answer)
    //     return;
    // } else {
    //     console.log("Still works, I guess");
    // } 


}

firstAnswer.on("click", checkAnswer)
secondAnswer.on("click", checkAnswer)
thirdAnswer.on("click", checkAnswer)
fourthAnswer.on("click", checkAnswer)


python.displayAnswers ()

// checkAnswer (python);


// create an array of objects

// create functions to change the page text to match the object's text

// Create on click features and intervals that move the game along, and determine if the correct choice was made.

// counters to keep track of wins and losses

// display page at the end


// let addedmethods = {

// }

// // let python = Object.create(addedmethods)
// // let bug = Object.create(addedmethods)
// // let jName = Object.create(addedmethods)
// // let babbage = Object.create(addedmethods)
// // let language = Object.create(addedmethods)