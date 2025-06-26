document.title = "DOM in JavaScript";
document.header="DOM in JavaScript"; 
//or document.getElementById("header").innerHTML = "DOM in JavaScript";
document.getElementById("header").style.color = "red"; // Change the color of the element with id "mr" to red
document.getElementById("header").style.fontSize = "30px"; // Change the font size of the element with id "mr" to 30px
document.getElementsByClassName("paragraph").innerHTML="She is always sleeping"; // Change the content of the first element with class "paragraph" to "She is always sleeping"
document.body.style.backgroundColor = "lightblue"; // Change the background color of the body to light blue
document.getElementsByClassName("ds")[0].style.color = "green"; //style elemnets by query selector
document.querySelector(".dsa").style.color = "red"; // Change the color of the first
//style elements by query selector all
let elements = document.querySelectorAll(".EB");
elements[0].style.color = "pink"; // Change the color of the first element with class "ds" to green
elements[1].style.color = "blue"; // Change the color of the second element
elements[2].style.color = "black"; // Change the color of the third element with class "ds" to brown
elements[3].style.color = "purple"; // Change the color of the fourth element
//Functuin to toggle background color
function changeBackground(){
    document.body.style.backgroundColor = "purple";
    alert("Background color changed to purple!");
}
//change background to light blue and thrn to purple
function changeBackground(){
    if(document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "purple";


    }
    else{
        document.body.style.backgroundColor = "lightblue";
    }
}
