# _Mr. Roboger's Neighborhood_

#### By _**Alex McKnight**_

#### _A Number Input Project_

## Technologies Used

- _JavaScript_
- _HTML_
- _JQuery_

## Description

_A project from Epicodus used to test different number inputs to give a different result. Entering a number from 1 to 100 will give a response from "Mr. Roboger" correlating to the number that was put in._

## Setup/Installation Requirements

- _Install Google Chrome browser_
- _Download GitHub file_
- _https://github.com/alex-mcknight11/roboroger_
- _Open folder labeled "roboger"_
- _Website will open in browser_

## Tests

Describe: checkForMatch()

Test: "It should match the assigned word or phrase to its corresponding number"
code:
function checkForMatch(number) {
let numberArray = [];
for (let i = 0; number >= i; i++) {
const element = i.toString();
if (element.includes('3')) {
numberArray.push("Won't you be my neighbor?");
} else if (element.includes('2')) {
numberArray.push('Boop!');
} else if (element.includes('1')) {
numberArray.push('Beep!');
} else {
numberArray.push(element);
}
Expected Output: 1 = 'Beep!' 2 = 'Boop!' 3 = 'Won't you be my neighbor?'

## Known Bugs

- _String will not show in User Interface and must instead be accessed through the console_
- _Claims Array is undefined_

## License

Copyright (c) _1/21/22_ _Alex McKnight_
