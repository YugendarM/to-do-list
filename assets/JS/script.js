const newTask = (userInput) => 
    `<div class="to__do__task">
        <div class="task__left__part">
            <button class="check__button"><i class="fa-solid fa-check"></i></button>
            <p class="task__desc">${userInput}</p>
        </div>
        <button onClick="handleDelete()" class="delete__button"><i class="fa-solid fa-trash"></i></button>
    </div>`



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

const handleDelete = () => {
    console.log("deleteclickde");
}

const handleCheck = () => {
    console.log("check clicked");
}