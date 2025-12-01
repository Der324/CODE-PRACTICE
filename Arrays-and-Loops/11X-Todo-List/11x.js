  const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name:'work out', 
    dueDate: '2025-12-02'
  }, {
    name:'healthy meals',
    dueDate: '2024-11-15'
  }];

  renderTodoList();

  function renderTodoList() {

    let todoListHTML = '';

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

 

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  }
  



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

    saveToStorage();
  }

  function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }