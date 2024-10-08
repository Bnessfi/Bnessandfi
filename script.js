document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const todoList = document.getElementById('todo-list');
        
        // Create a new list item
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        listItem.appendChild(span);
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        listItem.appendChild(deleteButton);

        // Add list item to the list
        todoList.appendChild(listItem);

        // Clear the input
        input.value = '';

        // Add delete functionality
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }
});
