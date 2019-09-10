console.log("Printing all numbers between -10 to 20");
var num = -10;
while(num < 20){
    console.log(num);
    num++;
}

console.log("Printing all even numbers between 10 to 40");
var num = 10;
while(num<=40){
    if(num%2 === 0){
        console.log(num);
    }
    num++;
}

console.log("Printing all odd numbers between 300 to 333");
var num = 300;
while(num<=333){
    if(num % 2 !== 0){
        console.log(num);
    }
    num++;
}


console.log("Printing all numbers divisible by 5 and 3 between 5 and 50");
var num = 5;
while(num<=50){
    if(num%5===0 && num%3===0){
        console.log(num);
    }
    num++;
}