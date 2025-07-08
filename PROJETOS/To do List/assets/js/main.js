const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== '') {
        addTask(taskText);

        input.value = '';
        input.focus();
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.style.marginLeft = '10px';

    deleteButton.addEventListener('click', function(){
        li.remove();
    });

    li.addEventListener('click', function(){
        li.classList.toggle('completed')
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

alert('oie');