#! /usr/bin/env node 
import inquirer from "inquirer";
function countWords(paragraph) {
    let freeWhiteSpaces = paragraph.replace(/\s/g, "");
    return freeWhiteSpaces.length;
}
async function startApp() {
    do {
        const answers = await inquirer.prompt([
            {
                name: "paragraph",
                type: "input",
                message: "Enter the paragraph to count words:",
            },
        ]);
        let wordCount = countWords(answers.paragraph);
        console.log(`The paragraph contains ${wordCount} words.`);
    } while (true);
}
startApp();
