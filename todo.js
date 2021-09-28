

const taskinput = document.getElementById("taskinput");
const button = document.getElementById("button");
const itemlist = document.getElementById("itemlist");
const deleteButton = document.getElementById("deletebutton");


button.addEventListener("click", function () {
    const paragraph = document.createElement("p");
    paragraph.innerText = taskinput.value;
    itemlist.appendChild(paragraph);
    paragraph.appendChild(deleteButton);




    paragraph.classList.add("paragraph-styling");

})

deleteButton.addEventListener("click", (e));





// const deletebutton = document.getElementById("itemlist");
// deletebutton.appendChild(deleteButton)