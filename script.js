//select element and assign them to variables

let inputElement = document.querySelector('#addTask');

let form = document.querySelector('form');
let incompleteList = document.querySelector('.incomplete-list ul');
let completeList = document.querySelector('.complete-list ul');



// this function use for create list item
let CreateItem = (task)=>{
    let listItem = document.createElement('li');
    let labelItem = document.createElement('label');
    let checkbox = document.createElement('input');
   
 
    
    checkbox.type = 'checkbox';
    labelItem.innerText = task;
   listItem.appendChild(checkbox).style.marginRight ='5px';
   listItem.appendChild(labelItem);
   return listItem;

}
function completeTask(c){
    let listElement = c.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete';
    deleteBtn.className ='delete';
    listElement.appendChild(deleteBtn);
    let checkBoxNew = listElement.querySelector('input[type="checkbox"]');
    checkBoxNew.remove();
    completeList.appendChild(listElement);
    BlindDeleteTask(listElement,deleteTask);

}

function BlindDeleteTask(listElement,deleteTask){
    let DeleteButton = listElement.querySelector('.delete');
    DeleteButton.onclick = ()=>{deleteTask(DeleteButton.parentNode)
    };
}
const deleteTask = (d)=>{
    // console.log('clicked');
    
   
    d.remove();
    
}

// this function call when user click add task button and the form is submitted
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let resultListItem = CreateItem(inputElement.value);
    let newIncomplete =incompleteList.appendChild(resultListItem);
    newIncomplete.style.paddingBottom = '5px';
    newIncomplete.style.margin ='10px 0px'
    newIncomplete.style.borderBottom = ' 1px solid #B1C9BB';

    
  
    inputElement.value = "";
    blindCompleteTask(newIncomplete,completeTask);
    
    
});

function blindCompleteTask(task,completeTask){
    let newCheckBox = task.querySelector('input[type="checkbox"]');
    newCheckBox.onchange = ()=>{completeTask(newCheckBox)};
}
for(let i = 0;i<incompleteList.children.length;i++){
    let everyItem = incompleteList.children[i];
    blindCompleteTask(everyItem,completeTask);
    
}
for(let i = 0;i<completeList.children.length;i++){
    let every = completeList.children[i];
    BlindDeleteTask(every,deleteTask);
    
}




