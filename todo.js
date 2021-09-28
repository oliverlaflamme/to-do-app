

const taskinput = document.getElementById("taskinput");
const button = document.getElementById("button");
const itemlist = document.getElementById("itemlist");
const deleteButton = document.getElementById("deletebutton");


button.addEventListener("click", function () {
    const paragraph = document.createElement("p");
    paragraph.innerText = taskinput.value;
    itemlist.appendChild(paragraph, deleteButton);
    paragraph.classList.add("paragraph-styling");

    const deleteButton = document.createElement("button")
    itemlist.appenchild(deleteButton); //this need to be add to this click function at the same time than taskinput but does add  the button

})



deleteButton.addEventListener("click", function () {

    deleteButton = "click", delete  //???????????????????

})