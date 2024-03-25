#! /usr/bin/env node
import inquirer from "inquirer";
// mind mapping
// 1=computer will generate number
// 2=input from the user 
// 3= compaire input with generated number then show result 
const randomNumber = Math.floor(Math.random() * 6 + 1); // Math.floor(Math.random() * 10 + 1) will generate numbers rnadomely
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: " PLEASE GUESS A NUMBER BETWEEN 1 TO 6 ",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(`HURRRAY YOU GUESS THE RIGHT NUMBER ${randomNumber} ........`);
}
else {
    console.log(`SORRY..! THE NUMBER ${answer.userGuessNumber} IS THE WRONG GUESS`);
}
