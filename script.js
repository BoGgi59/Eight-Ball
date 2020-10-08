//EIGHT BALL GAME

//Taking name from user
let userName = prompt("Enter your name please", "");

//ternary operator for consol type 1
userName
  ? console.log(`Hello ${userName} !`)
  : console.log("Hello Guest User!");

// answer for consol type 2
/*
let defaultName = userName || "Guest User";

console.log("Merhaba " + defaultName);
alert("Merhaba " + defaultName);
*/

//ternory operator in alert
userName ? alert(`Hello ${userName} !`) : alert("Hello Guest User!");
alert;

let userQuestion = prompt("Ask a question to Fortune Eight Ball", "");

console.log(`${userName}'s question is ${userQuestion}`);

//math functions
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = " ";

//switch case type 1
switch (randomNumber) {
  case 0:
    eightBall = "•	It is certain";
    break;
  case 1:
    eightBall = "•	It is decidedly so";
    break;
  case 2:
    eightBall = "• Reply hazy try again";
    break;
  case 3:
    eightBall = "•	Cannot predict now";
    break;
  case 4:
    eightBall = "•	Do not count on it";
    break;
  case 5:
    eightBall = "•	My sources say no";
    break;
  case 6:
    eightBall = "•	Outlook not so good";
    break;
  case 7:
    eightBall = "•	Signs point to yes";
    break;
}
console.log(eightBall);
alert(eightBall);

//switch case type 2
/*
let eightBall = randomNumber ;
 switch (eightBall) {
    case 0:
        console.log(‘It is certain’);
        break;
    case 1:
        console.log(‘It is decidedly so’);
        break;
    case 2:
        console.log(‘Reply hazy try again’);
        break;
    case 3:
        console.log(‘Cannot predict now’);
        break;
    case 4:
        console.log(‘Do not count on it’);
        break;
    case 5:
        console.log(‘My sources say no’);
       break;
    case 6:
        console.log(‘Outlook not so good’);
       break;
    case 7:
        console.log(‘Signs point to yes’);
       break;
    }
    */
