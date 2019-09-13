console.log("Haha connected!");

var button = document.querySelector("button");
// var button = document.getElementsByTagName("button")[0];
// document.querySelector("body");
// document.getElementsByTagName("body")[0];


button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});


// var isPurple = false;
// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });