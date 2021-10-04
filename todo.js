const taskinput = document.getElementById("taskinput");
const submitButtom = document.getElementById("submitButton");
const itemlist = document.getElementById("itemlist");
const deleteAll = document.getElementById("deletealltask")

submitButtom.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});
function addTask() {
    const newTask = document.createElement("li");
    const completedButton = document.createElement('button');
    const deleteButton = document.createElement("button");
    newTask.innerText = taskinput.value;
    itemlist.appendChild(newTask);

    completedButton.innerText = "Completed";
    newTask.appendChild(completedButton);
    completedButton.addEventListener("click", function () {
        newTask.style.textDecoration = "line-through";
    })

    deleteButton.innerText = "Delete";
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => deleteTask(deleteButton));
    document.querySelector('.input').reset();
    deleteAll.addEventListener("click", () => deleteAllTask
        (deleteAll));
    newTask.classList.add("paragraph-styling");
}
function deleteTask(element) {
    element.parentElement.remove();
}
function deleteAllTask(element) {
    element.childElement.remove();
}




