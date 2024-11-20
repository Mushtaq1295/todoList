const item = document.querySelector("#item")  //input box
const toDoBox = document.querySelector("#to-do-box")  //ul


item.addEventListener('keyup',
    function(e){
        if(e.key === "Enter"){
            addToDo(this.value);
            this.value = '';
        }

})

const addToDo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <i class="fa-regular fa-circle-xmark"></i>`
    listItem.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    toDoBox.appendChild(listItem);
    
    listItem.querySelector("i").addEventListener('click',
        function(){
            listItem.remove();
        }
    )
    

}