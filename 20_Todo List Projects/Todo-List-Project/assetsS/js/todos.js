//test
// alert("CONNECTED");

//check off specific todos by clicking
$("ul").on("click","li", function(){
	//For ul and li from previous function
	/*we can only add a listener using jQuery,
	we add listener to entire ul parent
	so anytime we click on ul, this listener will fire
	except second argument which is li
	when li is click inside of ul run toggleclass code.*/

	//gray,line-through 开关
	$(this).toggleClass("completed");
	
	// //if li is gray 
	// console.log($(this).css("color"))
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//trun it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// //else turn it gray
	// else{
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through" //text-decoration no working we need camocase
	// 	});
	// }
})

//click on X to delete Todo
//span -> li -> ul -> container -> body
//we only want to run when span is clicked inside of ul
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){  //$(this).remove() will only remove span but I want to remove li which is from parent
		$(this).remove();       // we need fadeOut first and then remove
	});
	event.stopPropagation();    //this will stop bubbling up to other elements
})

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})