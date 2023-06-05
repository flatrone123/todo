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
    deleteTask();
    // editTask();
})

// function editTask() {
//     let tasks = document.querySelectorAll('p');
//     for (let task of tasks) {
//         task.addEventListener('click', () => {
//             showHideNewTaskField();

//             let editedTask = document.querySelector('textarea');
//             let btn = document.querySelector('.add-new-task');

//             btn.addEventListener('click', () => {
//                 task.textContent = editedTask;
//             })
//         })
//     }
// }

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

function addTask() {
    let textArea = document.querySelector('textarea');
    let newTask = textArea.value;

    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.addEventListener('click', () => {
        circle.classList.toggle('done-circle');
    })
    
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