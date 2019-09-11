console.log("CONNECTED");

//printReverse()
function printReverse(arr){
	for(var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([1,2,3,4]);

//isUniform()
//write a function isUniform() which takes an array as an argument
//and returns true if all elements in the array are identical
//isUniform([1,1,1,1]);      //true
//isUniform([2,1,1,1]);      //false
//isUniform(["a","b","p"]);  //false
//isUniform(["b","b","b"]);  //true
function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
		// if(arr.indexOf(i) === arr.indexOf(i+1)){
		// 	return true;
		// }	
	}
	return true;
	//return false;
}

//sumArray()
//sumArray([1,2,3])
//sumArray([10,10,10])
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	})
	return total;
	// for(var i = 0; i < arr.length; i++){
	// 	  total += arr[i];
	// }
	// return total;
}

//max()
//max([1,2,3])
//max([10,5,20])
function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}