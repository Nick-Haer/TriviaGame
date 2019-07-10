let secondsRemaining = 25;
let questionCounter = 0

let timeDisplay = $("#seconds")
let questionDisplay = $("#questiondisplay")
let firstAnswer = $("#answer1");
let secondAnswer = $("#answer2");
let thirdAnswer = $("#answer3");
let fourthAnswer = $("#answer4");
let beginButton = $("#begin")

let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let timer;


let python = {
    question: "What is the Python programming language named after?",
    a1: ["A horror movie", false],
    a2: ["A British comedy troupe", true],
    a3: ["A kind of snake", false],
    a4: ["An acronym", false]

};

let bug = {
    question: `Where does the programming term, "bug", get its name from?`,
    a1: ["From how much it bugs the programmer", false],
    a2: ["From the name of the first computer to have a bug", false],
    a3: ["The first computer bug was an actual bug", true],
    a4: ["Many of the earliest programmers liked to ride buggies.", false]

}

let jName = {
    question: "What was the original name of JavaScript?",
    a1: ["Mocha", true],
    a2: ["Java", false],
    a3: ["FrappucinoScript", false],
    a4: ["JavaCup", false]

}

let babbage = {
    question: "Who invented what is widely considered the first computer?",
    a1: ["Galileo", false],
    a2: ["Charles Babbage", true],
    a3: ["Steve Jobs", false],
    a4: ["Bill Gates", false]

}

let language = {
    question: "What is the name of the first programming langauge?",
    a1: ["JavaScript", false],
    a2: ["C", false],
    a3: ["Visual Basic", false],
    a4: ["Fortran", true]

}


let questionsArray = [python, bug, jName, babbage, language]


const correctAnswer = function () {
    console.log(timer)
    clearInterval(timer)
    questionDisplay.text("Correct!")
    firstAnswer.text("")
    secondAnswer.text("")
    thirdAnswer.text("")
    fourthAnswer.text("")
    questionCounter++;
    correctAnswers++;
    setTimeout(displayAnswers, 4000);
    if (questionCounter === 5) {
        firstAnswer.text(`Finished! Here's Your Scores!`)
        secondAnswer.text(`Correct Answers: ${correctAnswers}`)
        thirdAnswer.text(`Incorrect Answers: ${incorrectAnswers}`)
        fourthAnswer.text(`Ran Out of Time: ${unanswered}`)
            return true;
        }

}

const wrongAnswer = function () {
    clearInterval(timer)
    questionDisplay.text("Not this time")
    firstAnswer.text("")
    secondAnswer.text("")
    thirdAnswer.text("")
    fourthAnswer.text("")
    questionCounter++;
    incorrectAnswers++;
    if (questionCounter === 5) {
    firstAnswer.text(`Finished! Here's Your Scores!`)
    secondAnswer.text(`Correct Answers: ${correctAnswers}`)
    thirdAnswer.text(`Incorrect Answers: ${incorrectAnswers}`)
    fourthAnswer.text(`Ran Out of Time: ${unanswered}`)
        return true;
    }
    setTimeout(displayAnswers, 4000);
}

const outOfTime = function () {
    questionDisplay.text("KABOOM, time's up!")
    firstAnswer.text("")
    secondAnswer.text("")
    thirdAnswer.text("")
    fourthAnswer.text("")
    questionCounter++;
    unanswered++;
    setTimeout(displayAnswers, 4000);
    if (questionCounter === 5) {
        firstAnswer.text(`Finished! Here's Your Scores!`)
        secondAnswer.text(`Correct Answers: ${correctAnswers}`)
        thirdAnswer.text(`Incorrect Answers: ${incorrectAnswers}`)
        fourthAnswer.text(`Ran Out of Time: ${unanswered}`)
            return true;
        }
}


const decrement = function () {
    timer = setInterval(() => {
        secondsRemaining--
        timeDisplay.text(`Time remaining: ${secondsRemaining} seconds left`);
        if (secondsRemaining === 0) {
            clearInterval(timer);
            outOfTime ()
        }
    }
        , 1000);


}



function displayAnswers() {
    questionDisplay.text(questionsArray[questionCounter].question)
    firstAnswer.text(questionsArray[questionCounter].a1[0])
    secondAnswer.text(questionsArray[questionCounter].a2[0])
    thirdAnswer.text(questionsArray[questionCounter].a3[0])
    fourthAnswer.text(questionsArray[questionCounter].a4[0])
    secondsRemaining = 25;
    timeDisplay.text(`Time remaining: ${secondsRemaining} seconds left`);
    decrement();
    console.log("done");
}

beginButton.on("click", displayAnswers).on("click", () => beginButton.fadeOut("slow"))

const checkAnswer = function (obj) {
    let choice = $(this).attr("id")
    if (choice === "answer1") {
        if (questionsArray[questionCounter]["a1"].includes(true)) {
            correctAnswer();
        } else {
            wrongAnswer();
        }

    } else if (choice === "answer2") {
        if (questionsArray[questionCounter]["a2"].includes(true)) {
            correctAnswer();
        } else {
            wrongAnswer();
        }

    } else if (choice === "answer3") {
        if (questionsArray[questionCounter]["a3"].includes(true)) {
            correctAnswer();
        } else {
            wrongAnswer();
        }

    } else {
        if (questionsArray[questionCounter]["a4"].includes(true)) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    }

}

firstAnswer.on("click", checkAnswer)
secondAnswer.on("click", checkAnswer)
thirdAnswer.on("click", checkAnswer)
fourthAnswer.on("click", checkAnswer)



// restart condition

// endgame page

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