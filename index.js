#! /usr/bin/env node    //Shebang
//Importing inquirer module from node modules
import inquirer from "inquirer";
//Declaring a variable to store the user input.
const userInput = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence in which you want the words counted: ",
    }
]);
//Applying methods to count words in a sentence.
const words = userInput.sentence.trim().split(" ");
//Printing the array.
console.log(words);
//Printing the word count.
console.log(`Your sentence's word count is ${words.length}`);
