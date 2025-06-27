let aish=document.createElement("p");
//create a new paragraph element
aish.textContent="I am chitti";
//set the text content of the paragraph
document.getElementById("vasi").appendChild(aish);
//append the paragraph to the body of the document
aish.innerHTML="MEMORY 1 TERA BITE";
document. body.style.backgroundColor="purple";
//change the background color of the document
setTimeout(() => {
    let re=document.getElementByclassNamw("list")[4];
    if(re) {
        re.remove();
    }
}, 5000);
//remove the fifth element with class "list" after 5 seconds.
let tagText = document.createElement("p");
//create a new text node
tagText.textContent = "this texts appended to the tag!";
tagText.style.color = "blue";
document.getElementById("vasi").appendChild(tagText);
//create a list ,add items,and remove one
let mylist=document.createElement("ul");
//create a new unordered list
for(let i=0;i<5;i++){
    let listitems = document.createElement("li");
    listitems.textContent = "Item " + i;
    listitems.style.color = "red";
    listitems.style.fontSize = "20px";
    mylist.appendChild(listItem);
    document.body.appendChild(mylist);//append the list to the body of the document
}