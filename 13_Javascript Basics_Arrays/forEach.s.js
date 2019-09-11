// =========
// VERSION 1
// =========
function myForEach(arr, func){
	//loop through array
	for (var i = 0; i < arr.length; i++) {
		//call func for each array
		func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];

myForEach(colors, alert)

myForEach(colors, function(color){
	console.log(color);
});

// =========
// VERSION 2 
// =========
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i]);
  }
};

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];

colors.myForEach(alert)

colors.myForEach(function(color){
	console.log(color);
});