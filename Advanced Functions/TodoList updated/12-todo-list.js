  const todoList = [{
    name:'work out', 
    dueDate: '2025-12-02'
  }, {
    name:'healthy meals',
    dueDate: '2024-11-15'
  }];

  renderTodoList();

  function renderTodoList() {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => { //using arrow function => here for cleaner syntax and easy to ready.
      const { name, dueDate } = todoObject;

      const html =`
        <div>${name}</div>
        <div>${dueDate}</div>
          
        <button class ="delete-todo-button js-delete-todo-button">Delete</button>
      `; //generating html

      todoListHTML += html;

    });

    /* we've used forEach loop above instead of for loop.

    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;

      const html =`
        <div>${name}</div>
        <div>${dueDate}</div>
          
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class ="delete-todo-button">Delete</button>
      `; //generating html

      todoListHTML += html;
  }
      */

 

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        //console.log(index);
        /*
        Closure
        if a function has access to value, it will always have access to that value
        value gets packaged together(enclosed) with the function.
        */
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
    //As soon as .foreach() loop ends index doesn't exist anywhere
    //console.log(index);

  }
  

  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    });

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;
    
    todoList.push({
      //name: name,     /*known as shorthand*/
      //dueDate: dueDate
      name,
      dueDate
    });
    


    inputElement.value = '';

    renderTodoList();
  }