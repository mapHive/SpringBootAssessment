/*
    ProductController perform action to the products to be displayed

    (1) Display all products to be retrieved from the back-end
    (2) Add product to the product list (send the new project to the back-end)
    --- edit an existing product detail
    -- remove an existing product from the product list
*/

// Development APIs
const addAPI= 'http://localhost:8080/todo/add';
const displayAPI = 'http://localhost:8080/todo/all';
let todoController = [];


function displayTodo()
{

       // Fetch data from database using the REST API endpoint from Spring Boot
       fetch(displayAPI)
           .then((resp) => resp.json())
           .then(function(data) {
               console.log("2. receive data")
               console.log(data);
               data.forEach(function (todo) {


                   const todoObj = {
                       id: todo.id,
                       title: todo.title,
                       description: todo.description,
                       date: todo.date
                  };

                   todoController.push(todoObj);
             });

            // Display all the objects from the productController array
             renderTodoPage();


           })
           .catch(function(error) {
               console.log(error);
           });
}


// Display info

function renderTodoPage() {

   let display = "";

   for (let i = 0; i < todoController.length; i++ ) {

       display += `
            <tr>
            <td>${todoController[i].title}</td>
            <td>${todoController[i].description}</td>
            <td>${todoController[i].date}</td>
            </tr>
       `
   }

   document.querySelector("#list").innerHTML= display;

}

//addProduct(name, description, imageUrl, style, price, storeImage);
function addTodo(title, description, date)
{
   const formData = new FormData();
   formData.append('title', title);
   formData.append('description', description);
   formData.append('date', date);

  fetch(addAPI, {
        method: 'POST',
        body: formData
        })
        .then(function(response) {
            console.log(response.status); // Will show you the status - 200 ok, 500, 404
            if (response.ok) {
                alert("Successfully Added Todo!")
            }
            else {
               alert("Something went wrong. Please try again")
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error adding todo")
        });
}








