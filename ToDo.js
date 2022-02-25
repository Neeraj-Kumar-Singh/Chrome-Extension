let inputfield = document.getElementById('inputfield');
let todoContainer = document.getElementById("todoContainer");
let addtodo = document.getElementById("addtodo");

// if(localStorage.getItem('itemsJson')==null){
// itemJsonArray=[];
// itemJsonArray.push([inputfield]);
// localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
// }
// else{
//   itemJsonArrayStr=localStorage.getItem('itemsJson');
//   itemJsonArray=JSON.parse(itemJsonArrayStr);
//   itemJsonArray.push([inputfield]);
//   localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
// }

addtodo.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');

    paragraph.innerText=inputfield.value;
    todoContainer.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
    })
})
inputfield.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("addtodo").click();
    }
  });

  function saveToDos() { 
    var items = 
     todos.getElementsByTagName("li"); 
    for (var i = 0; i < items.length; ++i) { 
             savedToDos.push(
             items[i].innerHTML); 
}
         
localStorage.setItem('savedValues', savedToDos); 
}