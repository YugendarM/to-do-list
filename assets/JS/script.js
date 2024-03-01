const newTask = () => 
    `<div class="to__do__task">
        <div class="task__left__part">
            <button class="check__button"><i class="fa-solid fa-check"></i></button>
            <p class="task__desc">Full stack dev</p>
        </div>
        <button class="delete__button"><i class="fa-solid fa-trash"></i></button>
    </div>`



const handleSubmit = () => {
    console.log("clicked");
    const userInput = document.getElementById("input").value;
    
    const listContainer = document.getElementById("listContainer")

    listContainer.insertAdjacentHTML("beforeend",newTask())
}