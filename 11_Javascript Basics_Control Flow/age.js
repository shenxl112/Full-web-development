//Get age and convert it to a Number(prompt always returns a string)
var age = Number(prompt("How old are you?"));

if(age<0){
    console.log("age is less then zero");
}

if(age == 21){
    console.log("happy 21st birthday!!");
}

if(age % 2 == 1){
    console.log("your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}