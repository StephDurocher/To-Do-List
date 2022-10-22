//user types new task/idea in the input bar
//user clicks to submit (add event listener - "submit" button)
//function will take user information and add it to the bottom of the list (default)
//function will display task for user in the table- displayNewTaskOnList function
const form = document.querySelector("#addButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
const input = document.querySelector(".form-control");

let newTasks = [];
function displayNewTaskOnList(text) {
  const toDo = {
    text,
  };

  newTasks.push(toDo);
  console.log(newTasks);
}
