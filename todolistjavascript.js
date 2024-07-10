document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskName = taskInput.value.trim();
        const deadline = deadlineInput.value;

        if (taskName === '' || deadline === '') {
            alert('Please enter a task and deadline.');
            return;
        }

        addTask(taskName, deadline);
        taskInput.value = '';
        deadlineInput.value = '';
    });

    function addTask(taskName, deadline) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskName} (Deadline: ${deadline})</span>
            <button class="remove-button">Remove</button>
        `;
        
        taskList.appendChild(taskItem);

        taskItem.querySelector('button').addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
    }
});
