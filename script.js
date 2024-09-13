<<<<<<< HEAD
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
function addTask(){
    if(inputBox.value === '')
        alert("You must write something!");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
=======
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
function addTask(){
    if(inputBox.value === '')
        alert("You must write something!");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
>>>>>>> 9cd24a0 (pushing)
});