const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];
module.exports = {
  getAll,
  getOne,
  create,
};
function create(userInput) {
  let todo = {};
  todo.todo = userInput.theTitle;
  // Add the id
  todo.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  todo.done = false;
  todos.push(todo);
}

function getOne(id) {
  id = parseInt(id);
  return todos.find((todo) => todo.id === id);
}

function getAll() {
  return todos;
}
