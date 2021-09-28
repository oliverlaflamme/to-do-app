


let taskinput = document.getElementById("taskinput")
let button = document.getElementById("button")
let itemlist = document.getElementById("itemlist")

button.addEventListener("click", function () {
    const paragraph = document.createElement("p");
    paragraph.innerText = taskinput.value;
    itemlist.appendChild(paragraph);
    paragraph.classList.add("paragraph-styling");

})

