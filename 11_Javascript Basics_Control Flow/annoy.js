// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !=="yeah"){
//     var answer = prompt("are we there yet?");
// }
// alert("YAY, We made it!");


// if(answer === yes){
//     alert("YAY, We made it!");
// }


// Version 2
var answer = prompt("are we there yet?");
// -1 means not exist
while(answer.indexOf("yes") === -1 || answer.indexOf("yeah") === -1){
    var answer = prompt("are we there yet?");
}
alert("YAY, We made it!");