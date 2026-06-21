let confirmBtn = document.getElementById('confirm-btn');

confirmBtn.addEventListener("click", ev => {
    const toDoItem = document.getElementById('todo-input');
    const toDoValue = toDoItem.value;
    let str = '您输入的值是: '
    console.log(`${str}${toDoValue}`);
    toDoItem.value = '';
})


// document.createElement()