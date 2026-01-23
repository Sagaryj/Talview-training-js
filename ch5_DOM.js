console.log(window);
console.log(document);
console.log(window.document);
console.dir(document.body);
console.dir(document);
let heading = document.getElementById("heading");
console.log(heading);

let devs= document.querySelectorAll(".box");
console.log(devs);
devs[0].innerText="This is the first box";
devs[1].innerText="unique values";
devs[2].innerText="JavaScript DOM manipulation";

for(let i=0;i<devs.length;i++)
{
    devs[i].style.color="white";
    devs[i].style.backgroundColor="teal";
    devs[i].style.padding="10px";
    devs[i].style.margin="10px";
}

let newDiv=document.createElement("div");
newDiv.innerText="This is a new div created using JavaScript";
newDiv.style.color="black";
newDiv.style.backgroundColor="lightgreen";
newDiv.style.padding="10px";
newDiv.style.margin="10px";

document.body.appendChild(newDiv);

let heading2=document.querySelector("h2");
heading2.style.color="blue";
heading2.style.textAlign="center";

heading2.addEventListener("click", function() {
    alert("You clicked the heading!");
});

let button=document.querySelector("button");
button.addEventListener("click", function() {
    alert("Button was clicked!");
});

function showMessage() {
    alert("Hello! This is a message from the showMessage function.");
}           
console.log("DOM manipulation script executed.");