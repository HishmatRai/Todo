var user = document.getElementById("maindivPart1");
var forCreateTag = document.createElement("h1");
var forTagText = document.createTextNode("Todo App");
forCreateTag.appendChild(forTagText);
user.appendChild(forCreateTag);
var forBreakLine =document.createElement("br");
user.appendChild(forBreakLine);
var forinput = document.createElement("input");
forinput.setAttribute('type', 'text');
forinput.setAttribute('id', 'd1');
forinput.setAttribute('placeholder', 'Enter name');
// forinput.setAttribute("required", "required");
console.log;(forinput);
user.appendChild(forinput);
var forBreakLine =document.createElement("br");
user.appendChild(forBreakLine);
var forButton = document.createElement("button");
forButton.setAttribute("id", "btn");
var value = document.createTextNode("add work");
forButton.appendChild(value);
user.appendChild(forButton);

forButton.setAttribute("onClick","div1()");
user.appendChild(forButton);



    function div1(){
        var getData = document.getElementById('d1').value;
        if(getData === ""){
            alert("Sorry ! Please Enter Something")
        }
        else{
        var peraCreat = document.createElement("div");
     peraCreat.setAttribute("id","id2");
     var fouUL =document.createElement("ul");
     var fouLi =document.createElement("li");
     fouLi.setAttribute("id", getData);
     var liData = document.createTextNode(getData);
     fouLi.appendChild(liData);
     fouUL.appendChild(fouLi);
     peraCreat.appendChild(fouUL);
     user.appendChild(peraCreat);
    
    
    
    
     var editButton = document.createElement("button");
     var hh = document.createTextNode("Edit");
     
     editButton.appendChild(hh);
     fouLi.appendChild(editButton);
     fouUL.appendChild(fouLi); 
     peraCreat.appendChild(fouUL);
     user.appendChild(peraCreat);
    
    
     var deleteButton = document.createElement("button");
     var kk = document.createTextNode("Delete");
     deleteButton.appendChild(kk);
     fouLi.appendChild(deleteButton);
     fouUL.appendChild(fouLi); 
     peraCreat.appendChild(fouUL);
     user.appendChild(peraCreat);
    
     deleteButton.addEventListener("click", function(){
         editButton.parentNode.remove();
     })
     editButton.addEventListener("click", function(){
         var text = this.parentNode;
         var prop = prompt("Enter your value", text.id);
         text.innerText = prop;
        text.appendChild(editButton);
        text.appendChild(deleteButton);
     })
    
    
     document.getElementById("d1").value = "";
     
    
    
    }
    }