
// $("button").on("click", function(){
// 	$("div").fadeOut(1000);
// 	console.log("Fade completed!");
// });

// //if we want to print Fade completed after fadeOut then we need function
// $("button").on("click", function(){
// 	$("div").fadeOut(1000, function(){
// 		console.log("Fade completed!");
// 	});
// });

// //$(this).remove(); this will update original files.
// $("button").on("click", function(){
// 	$("div").fadeOut(1000, function(){
// 		$(this).remove();
// 	});
// });

// //fadeIn
// $("button").on("click", function(){
// 	$("div").fadeIn(1000);
// });

// //fadeIn and fadeOut 
// $("button").on("click", function(){
// 	$("div").fadeToggle(500);
// });

// //slideDown()-appear  in css active display: none; 
// $("button").on("click", function(){
// 	$('div').slideDown();
// });

// //slideUp()-disappear  in css not active display: none; 
// $("button").on("click", function(){
// 	$('div').slideUp();
// });

//slideToggle()
$("button").on("click", function(){
	$('div').slideToggle(1000, function(){
		// $(this).remove();
	});
});