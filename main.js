document.getElementById("addButton").addEventListener("click", listCreate);


function listCreate() {

  var inputValue = document.getElementById('inputArea').value;

  var list = document.createElement("li");
  list.innerHTML = inputValue;
   

  list.addEventListener("click", function (paramEvent) {
    paramEvent.target.remove();
    });
    
document.getElementById("myDiv").appendChild(list);

}