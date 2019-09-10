//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if (guess === secretNumber){
    alert("You got it right!");
}
//check if guess is higher 
else if (guess > secretNumber){
    alert("Too High. Guess again!");
}
//check if guess is lower
else {
    alert("Too low. Guess again!");
}



//**********************************
// //string we're looping over:
// var str = "hello";
// //first character is at index 0
// var count = 0;    

// while(count < str.length) { //if length is less than 5
//  console.log(str[count]);
//  count++;
// }

//"h"
//"e"
//"l"
//"l"
//"o"

//**********************************
// while(secretNumber != guess){
//     if(guess < secretNumber){
//         console.log("number is too low!");
//     }
//     else if (guess > secretNumber){
//         console.log("nuber is too high!");
//     }
//     else if(guess = isNaN){
//         console.log("this is not a number!")
//     }
// }
// console.log("You Win!");