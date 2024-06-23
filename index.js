    const form = document.querySelector('form');
    const input = document.getElementById('todo-list');
    const todoList = document.getElementById('todo-list');
    var li = document.querySelector('li');

    form.onsubmit = function(e) {
        e.preventDefault();  // Prevent the form from submitting the traditional way
        var todoText = input.value

        if (todoText !== "") {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = todoText;
            li.appendChild(btn);
            todoList.appendChild(li);
            input.value = "";  // Clear the input field after adding the todo item
            console.log(todoList);
        }
       
        li.onclick = function() {
            if (this.classList.contains('text')) {
               li.style = 'text-decoration-line: line-through' 
            } else {
                li.style = 'text-decoration-line: none'
            }
        }

    };

   
    