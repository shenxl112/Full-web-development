var todos = ["Buy New Turtle"];

var input = prompt("what would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        printList();
    } else if(input === "new"){
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
    //aks again for new input
    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function printList(){
    console.log("**********")
    todos.forEach(function(todo, i){
        // todos.indexOf(todo)
        console.log(i +": " + todo);
    });
    console.log("**********")
    // for(var i = 0; i<todos.length; i++){
    //     console.log(i+ ": " + todos);
    // } 
}

function addTodo(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delte that todo
    //splice() (specific item from array position, how many items to deleted)
    todos.splice(index,1);
    console.log("Deleted Todo");
}