let taskId = 0;
const newTask = (userInput) => {
        taskId++;
        return `<div class="to__do__task" id="task_${taskId}">
        <div class="task__left__part">
            <button class="check__button" id="check_${taskId}" onClick="handleCheck(${taskId})"><i class="fa-solid fa-check"></i></button>
            <p class="task__desc" id="input_${taskId}">${userInput}</p>
        </div>
        <button onClick="handleDelete(${taskId})" class="delete__button"><i class="fa-solid fa-trash"></i></button>
    </div>`

    }


const handleSubmit = () => {
    console.log("clicked");
    userInputField = document.getElementById("input");
    const userInput = userInputField.value;
    
    if(userInput !== ""){
        const listContainer = document.getElementById("listContainer")
        listContainer.insertAdjacentHTML("beforeend",newTask(userInput))
        alert("Task added successfully")
        userInputField.value = ""
    }
    else{
        alert("Enter the content");
    }
}

const handleDelete = (taskId) => {
    console.log("deleteclickde"+taskId);
    const taskElement = document.getElementById(`task_${taskId}`);
    taskElement.remove()
    alert("Task deleted successfully")
    
}

const handleCheck = (taskId) => {
    console.log("check clicked"+taskId);
    const userInput = document.getElementById(`input_${taskId}`);
    userInput.style.textDecoration = "line-through";
    userInput.style.color = "gray";

    const checkButton = document.getElementById(`check_${taskId}`);
    checkButton.style.backgroundColor = "gray";
    checkButton.style.cursor = "not-allowed";
}