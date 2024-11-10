let button = document.querySelector('button');

button.addEventListener("click", addNewListItem);


function checkNumberOfListItems(){

    let listItemNumbers = document.querySelector('ul').childElementCount;
    return listItemNumbers;

}

function addNewListItem(){
    let currentListNumber = checkNumberOfListItems() + 1;
    let list = document.querySelector('ul');
    
    let lastListItem = document.createElement('li');
    lastListItem.innerText = `Item ${currentListNumber}`;
    lastListItem.classList.add('item');
    // list.appendChild(lastListItem);
    list.insertAdjacentElement("beforeend", lastListItem);
    
}
