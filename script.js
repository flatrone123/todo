downloadTasks();

let showNewTaskFieldBtn = document.querySelector('.show-new-task-field');
showNewTaskFieldBtn.addEventListener('click', () => {
    showHideNewTaskField();
})

let addNewTaskBtn = document.querySelector('.add-new-task');
addNewTaskBtn.addEventListener('click',() => {
    let textArea = document.querySelector('.textarea');
    let newTask = textArea.value;
    addTask(newTask);
})

let editBtn = document.querySelector('.edit');
editBtn.addEventListener('click', () => {
    toggleStyle();
    deleteTask();
    editTask();
})

document.addEventListener('click', () => {
    let tasks = document.querySelectorAll('.task');
    let obj = {};

    for (let i = 0; i < tasks.length; i++) {
        let done = tasks[i].children[0].classList.contains('done-circle');
        let text = tasks[i].children[1].textContent;

        obj[i] = {'task': text, 'status': done};
        console.log(obj);
    }

    let strObj = JSON.stringify(obj);
    localStorage.setItem('tasks', strObj);

})







function downloadTasks() {
    let strObj = localStorage.getItem('tasks');
    let obj = JSON.parse(strObj);

    for (let elem in obj) {
        let task = obj[elem].task; 
        let status = obj[elem].status
        addTask(task, status);
    }
}





function editTask() {
    let tasks = document.querySelectorAll('p');
 

    if (editBtn.textContent == 'Править') {
        for (let task of tasks) {
            task.onclick = null;
        }
    } else {
        for (let task of tasks) {
            task.onclick = () => {
                showHideEditTaskField();
    
                let editedTask = document.querySelector('.edited-task');
                let btn = document.querySelector('.edit-task');
    
                btn.onclick = () => {
                    task.textContent = editedTask.value;
                }
            }
        }
    }


    
}

function deleteTask() {
    let circles = document.querySelectorAll('.circle');
    for (let circle of circles) {
        if (editBtn.textContent == 'Отмена') {
            circle.onclick = foo;
        } else {
            circle.onclick = null;
        }
    }
    
    function foo() {
        this.parentElement.remove();
    }
}

function toggleStyle() {
    let circles = document.querySelectorAll('.circle');

    if (editBtn.textContent == 'Править') {
        editBtn.textContent = 'Отмена';

        for (circle of circles) {
            circle.classList.add('edit-circle');
        }
    } else {
        editBtn.textContent = 'Править';

        for (circle of circles) {
            circle.classList.remove('edit-circle');
        }
    }
}

function addTask(newTask, status = false) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.addEventListener('click', () => {
        circle.classList.toggle('done-circle');
    })
    if (status == true) {
        circle.classList.add('done-circle');
    }
    
    let p = document.createElement('p');
    p.textContent = newTask;

    let task = document.createElement('div');
    task.classList.add('task');
    task.append(circle);
    task.append(p);

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

function showHideEditTaskField() {
    let newTaskField = document.querySelector('.edit-task-field');
    newTaskField.style.display = 'block';
    let closeNewTaskFieldBtn = document.querySelector('.close-edit-task-field');
    closeNewTaskFieldBtn.addEventListener('click', () => {
        newTaskField.style.display = 'none';
    })
    let addNewTaskBtn = document.querySelector('.edit-task');
    addNewTaskBtn.addEventListener('click', () => {
        newTaskField.style.display = 'none';
    })
}