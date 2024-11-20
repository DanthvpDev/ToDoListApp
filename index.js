let inputTask = document.getElementById('inputTask');
let addButton = document.getElementById('addButton');
let toDoList = document.getElementById('toDoList');
let infoPopUp = document.querySelector('#infoPopUp');
let paragraph = infoPopUp.querySelector('p');
let task = inputTask.textContent;


//? Verifies if the user has typed something
function IsNotEmpty(input) {
    return input.value != '' ? true : false
}




//? This adds a task into the list of To Do task article
function addTask() {
    inputTask.classList.remove('error');
    infoPopUp.classList.remove('popUpAnimation', 'bg-myRed-800');
    
    const listItem = document.createElement('li');
    
    //? If the input is not empty
    if(IsNotEmpty(inputTask)) {
        listItem.className += 'text-pretty font-semibold flex items-center bg-aqua-green rounded-md justify-between px-2 py-2 text-cream transition-transform hover:transition-transform hover:bg-aqua-green-800'
        listItem.innerHTML = `${inputTask.value} <button class=" bg-delete bg-cover bg-no-repeat rounded-md h-8 w-8 deleteButton"></button>`
        toDoList.appendChild(listItem);

        let deleteButton = listItem.querySelector('.deleteButton');
        addDeleteTask(deleteButton);

    }
    else {
        

        void infoPopUp.offsetWidth;

        inputTask.classList.add('error');
        infoPopUp.classList.add('popUpAnimation', 'bg-myRed-800');
        paragraph.textContent = 'No ha escrtio su tarea';
    }

    inputTask.value = ""; 
    
}

function addDeleteTask(element) {
    
    let listItem = element.parentElement;
    element.addEventListener('click', ()=> {
        listItem.remove();
        infoPopUp.classList.remove('popUpAnimation', 'bg-aqua-green');
        void infoPopUp.offsetWidth;
        infoPopUp.classList.add('popUpAnimation', 'bg-aqua-green');
        paragraph.textContent = 'Tarea eliminada exitosamente';
    })

}




addButton.addEventListener('click', addTask, false);