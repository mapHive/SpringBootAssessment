
//Add an 'onsubmit' event listener
newTodoForm.addEventListener('submit', (event) => {


  // Prevent default action of the Form submission
  event.preventDefault();


  // Select the inputs
  const title = document.querySelector('#newTodoTitleInput').value;
  const description = document.querySelector('#newTodoDescription').value;
  const date = document.querySelector('#newTodoDate').value;


  // Calls a function from the productController.js to access the API to add items to the database
  addTodo(title, description, date);  //arguments

});



