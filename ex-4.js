const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  // if (todos.completed === true) {
  //   return todos;
  // }
  return todos.filter((todo) => {
    if (todo.completed === true) {
      return todo;
    }
  });
}
console.log(getCompletedTodo(todos));
// const todoStatusTrue = todos.filter(getCompletedTodo);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
