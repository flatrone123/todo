let showNewTaskFieldBtn = document.querySelector('.show-new-task-field');

showNewTaskFieldBtn.addEventListener('click', () => {
    showHideNewTaskField();

    let addNewTaskBtn = document.querySelector('.add-new-task');
    addNewTaskBtn.addEventListener('click',() => {
        addTask();
    })

})


let editBtn = document.querySelector('.edit');
editBtn.addEventListener('click', () => {
    
    toggleStyle();

    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        if (editBtn.textContent == 'Отмена') {
            input.onclick = deleteTask;
        } else {
            input.onclick = null;
        }
    }
    
    function deleteTask() {
        this.parentElement.remove();
    }


    
})











function toggleStyle() {
    if (editBtn.textContent == 'Править') {
        editBtn.textContent = 'Отмена';
    } else {
        editBtn.textContent = 'Править';
    }

    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        input.classList.toggle('edit-input');
    }
}



function addTask() {
    let textArea = document.querySelector('textarea');
    let newTask = textArea.value;

    
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = newTask

    let label = document.createElement('label');
    label.textContent = newTask;
    label.setAttribute('for', newTask);

    
    let task = document.createElement('div');
    task.classList.add('task');
    task.append(input);
    task.append(label);

    let taskList = document.querySelector('.task-list');
    taskList.append(task);
}




function showHideNewTaskField() {
    let newTaskField = document.querySelector('.new-task-field');
    newTaskField.style.display = 'block';
    let closeNewTaskFieldBtn = document.querySelector('.close-new-task-field');
    closeNewTaskFieldBtn.addEventListener('click', () => {
        newTaskField.style.display = 'none';
    })
    let addNewTaskBtn = document.querySelector('.add-new-task');
    addNewTaskBtn.addEventListener('click', () => {
        newTaskField.style.display = 'none';
    })
}