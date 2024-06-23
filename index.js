    const form = document.querySelector('#add-todo');
    const input = document.getElementById('todo-list');
    const todoList = document.getElementById('todo-list-ul');
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

            btn.onclick = function() {
                if (btn.style.textDecoration === 'line-through') {
                   li.remove();
                } else {
                    btn.style.textDecoration = 'line-through'
                }
            }
        }
             

    };

   
